import { CAL_COM_BOOKING_URL } from "../lib/calcom";

// Real Cal.com booking embed — a plain iframe pointed at the booking page
// with Cal.com's own `embed=true` param, no extra npm package, no OAuth.
// Falls back to a plain email prompt if the link isn't configured yet, so
// the site never ships a broken booking box while Cal.com is being set up.
export default function BookCallWidget({ height = 620 }) {
  if (!CAL_COM_BOOKING_URL) {
    return (
      <div className="rounded-xl border border-surface-line bg-surface-muted p-6 text-center text-sm text-ink-600">
        Online booking is being set up. In the meantime, email{" "}
        <a
          href="mailto:hello@charredguard.com"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          hello@charredguard.com
        </a>{" "}
        and we&rsquo;ll get a time on the calendar.
      </div>
    );
  }

  const src = `${CAL_COM_BOOKING_URL}${CAL_COM_BOOKING_URL.includes("?") ? "&" : "?"}embed=true`;

  return (
    <iframe
      src={src}
      title="Book a 15-minute call"
      className="w-full rounded-xl border border-surface-line"
      style={{ height }}
      loading="lazy"
    />
  );
}
