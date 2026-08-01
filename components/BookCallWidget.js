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
export default function BookCallWidget({ height = 480 }) {
  const elementId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const calLink = CAL_COM_BOOKING_URL
    ? CAL_COM_BOOKING_URL.replace(/^https?:\/\/(www\.)?cal\.com\//, "").replace(/^\/+|\/+$/g, "")
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

    window.Cal("inline", {
      elementOrSelector: `#${elementId}`,
      calLink,
      layout: "month_view",
    });

    window.Cal("ui", {
      theme: "light",
      hideEventTypeDetails: true,
      layout: "month_view",
    });
  }, [calLink, elementId]);

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
      className="w-full max-w-sm overflow-auto rounded-xl border border-surface-line bg-white"
      style={{ height }}
    />
  );
}
