// Server-side proxy so the browser never sees WEBSITE_API_SECRET. The
// get-started page calls this same-origin route when someone requests a
// Guided Photo Assessment; this route forwards to wildfire-notes, which
// creates the property, generates a homeowner invite, and emails it.
//
// WILDFIRE_NOTES_API_URL and WEBSITE_API_SECRET are server-only env vars
// (no NEXT_PUBLIC_ prefix) — set once this event type/route exists, see
// the internal app's BOOKING_PAYMENTS_PLAN.md.

export async function POST(request) {
  const baseUrl = process.env.WILDFIRE_NOTES_API_URL;
  const secret = process.env.WEBSITE_API_SECRET;
  if (!baseUrl || !secret) {
    return Response.json({ error: "Guided assessment signup isn't configured yet." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  if (!body) return Response.json({ error: "Invalid request" }, { status: 400 });

  const { address, name, email, phone, leadNotes } = body;
  if (!address || !email) {
    return Response.json({ error: "address and email are required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${baseUrl.replace(/\/+$/, "")}/api/public/guided-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-website-secret": secret,
      },
      body: JSON.stringify({ address, name, email, phone, leadNotes }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return Response.json({ error: data.error || "Could not start your guided assessment" }, { status: res.status });
    }
    return Response.json({ inviteLink: data.inviteLink });
  } catch (err) {
    return Response.json({ error: "Could not reach the assessment system — please try again shortly." }, { status: 502 });
  }
}
