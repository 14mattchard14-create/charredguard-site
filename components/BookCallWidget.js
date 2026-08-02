"use client";

import { useEffect, useId } from "react";
import { CAL_COM_BOOKING_URL } from "../lib/calcom";

// Real Cal.com booking embed via Cal.com's own official inline-embed script
// (loaded straight from app.cal.com — no npm package needed, avoids native
// install issues). This gives us access to Cal.com's `ui` config, which a
// plain iframe URL can't do: `hideEventTypeDetails` strips the bulky
// logo/title/duration/timezone panel, and `layout: "month_view"` plus
// `theme: "light"` together produce a small, plain month-grid picker much
// closer to a standard (e.g. Google Calendar-style) date picker than
// Cal.com's default full-width booker.
// Falls back to a plain email prompt if the link isn't configured yet, so
// the site never ships a broken booking box while Cal.com is being set up.
//
// `link` defaults to the 15-min intro call but can be overridden (e.g. with
// CAL_COM_INSPECTION_URL) to reuse this same widget for the on-site
// inspection booking step. `prefill` (name/email) carries contact info the
// visitor already gave us into Cal.com's own name/email fields, and — for
// the inspection booking specifically — makes the webhook's email-based
// match back to their existing CRM lead more reliable.
export default function BookCallWidget({ height = 440, link, prefill }) {
  const elementId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const bookingUrl = link || CAL_COM_BOOKING_URL;
  const calLink = bookingUrl
    ? bookingUrl.replace(/^https?:\/\/(www\.)?cal\.com\//, "").replace(/^\/+|\/+$/g, "")
    : null;

  useEffect(() => {
    if (!calLink) return;

    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", { origin: "https://cal.com" });

    // `theme` and `layout` must be nested under `config` on the "inline"
    // call itself (this is how Cal.com's own embed-code generator emits it) —
    // passing them as top-level keys is silently ignored, which is why the
    // widget was rendering with Cal.com's default dark, full-size layout
    // regardless of the later "ui" call.
    window.Cal("inline", {
      elementOrSelector: `#${elementId}`,
      calLink,
      config: {
        theme: "light",
        layout: "month_view",
        ...(prefill?.name ? { name: prefill.name } : {}),
        ...(prefill?.email ? { email: prefill.email } : {}),
      },
    });

    window.Cal("ui", {
      theme: "light",
      hideEventTypeDetails: true,
      layout: "month_view",
    });
    // Only re-run if the link or prefill values actually change — prefill
    // is a plain object literal from the caller, so compare its fields
    // rather than the object reference.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calLink, elementId, prefill?.name, prefill?.email]);

  if (!calLink) {
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

  return (
    <div
      id={elementId}
      className="w-full max-w-xs overflow-auto rounded-xl border border-surface-line bg-white"
      style={{ height }}
    />
  );
}
