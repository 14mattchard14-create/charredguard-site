// Central place for the Cal.com booking links. Set NEXT_PUBLIC_CAL_COM_LINK
// in the Vercel project's environment variables once the Cal.com event
// type exists — e.g. "https://cal.com/charredguard/15min" (see the
// internal inspector app's BOOKING_PAYMENTS_PLAN.md for the full Cal.com
// setup checklist: required "address" question, phone field, Google
// Calendar connection, webhook). Every booking entry point on this site
// reads from here, so there's one place to update once that's live.
export const CAL_COM_BOOKING_URL = process.env.NEXT_PUBLIC_CAL_COM_LINK || null;

// Second event type: booking the actual on-site inspection (as opposed to
// the 15-min intro call above). Set NEXT_PUBLIC_CAL_COM_INSPECTION_LINK
// once that event type exists in Cal.com — e.g.
// "https://cal.com/charredguard/inspection".
export const CAL_COM_INSPECTION_URL = process.env.NEXT_PUBLIC_CAL_COM_INSPECTION_LINK || null;
