import { CAL_COM_BOOKING_URL } from "../lib/calcom";

// Real Cal.com booking embed — a plain iframe pointed at the booking page
// with Cal.com's own `embed=true` param, no extra npm package, no OAuth.
// `theme=light` forces Cal.com's light booker UI regardless of the visitor's
// system theme, so it matches this site's light background instead of
// defaulting to Cal.com's dark theme (custom brand-color theming requires a
// paid Cal.com plan, so this is the closest match on the free tier).
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

  const src = `${CAL_COM_BOOKING_URL}${CAL_COM_BOOKING_URL.includes("?") ? "&" : "?"}embed=true&theme=light`;

  return (
    <iframe
      src={src}
      title="Book a 15-minute call"
      className="w-full rounded-xl border border-surface-line bg-white"
      style={{ height }}
      loading="lazy"
    />
  );
}
