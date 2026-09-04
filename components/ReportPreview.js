"use client";

import { useEffect, useRef, useState } from "react";

const FINDINGS = [
  {
    id: "vents",
    priority: "high",
    tag: "FIX FIRST",
    title: "Open eave vents, no ember-resistant mesh",
    zone: "Roof & vents zone",
    photos: 3,
    detail:
      "Embers can enter open or poorly-screened vents and ignite insulation or debris inside the attic — one of the most common ways homes catch fire in a wildfire, even when flames never reach the structure. Fix: install 1/8-inch noncombustible metal mesh over every vent opening.",
  },
  {
    id: "mulch",
    priority: "high",
    tag: "FIX FIRST",
    title: "Bark mulch within 3 ft of siding",
    zone: "0–5 ft noncombustible zone",
    photos: 2,
    detail:
      "Bark and wood mulch are combustible and sit directly against the structure here, giving embers an easy foothold right at the wall line. Fix: replace with rock, gravel, or bare mineral soil within the first 5 feet of the home.",
  },
  {
    id: "gate",
    priority: "med",
    tag: "MONITOR",
    title: "Wood-slat gate inside defensible space",
    zone: "5–30 ft defensible space",
    photos: 1,
    detail:
      "Not an immediate ember-entry risk since it's away from the structure, but combustible fencing that runs toward the house can carry fire closer over time. Worth replacing on your normal maintenance schedule rather than urgently.",
  },
  {
    id: "roof",
    priority: "pass",
    tag: "PASS",
    title: "Class A roofing material",
    zone: "Structure",
    photos: 1,
    detail:
      "This roofing material already meets Wildfire Prepared Home criteria for ignition resistance. No action needed here — noted for the record.",
  },
];

const TABS = [
  { key: "all", label: "All" },
  { key: "high", label: "Fix First" },
  { key: "med", label: "Monitor" },
  { key: "pass", label: "Pass" },
];

function MarkIcon({ priority }) {
  if (priority === "high") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (priority === "med") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TabArrow({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      className={`report-doc-tab-arrow ${direction}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous filter" : "Next filter"}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path
          d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function ReportPreview() {
  const [tab, setTab] = useState("all");
  const [openId, setOpenId] = useState(FINDINGS[0].id);
  const tabScrollRef = useRef(null);

  const visible = tab === "all" ? FINDINGS : FINDINGS.filter((f) => f.priority === tab);
  const tabIndex = TABS.findIndex((t) => t.key === tab);

  // Sets scrollLeft directly rather than el.scrollIntoView() — scrollIntoView's
  // block:'nearest' still scrolls ancestor containers (including the page
  // itself) toward the target when it isn't yet in the viewport, which on
  // mount (before this section has scrolled into view) yanked the whole
  // page down to it. Only ever touching scrollLeft keeps this strictly
  // horizontal, no matter where the section sits on the page.
  useEffect(() => {
    const container = tabScrollRef.current;
    const el = container?.querySelector(`[data-tab-key="${tab}"]`);
    if (!container || !el) return;
    const target = el.offsetLeft - (container.clientWidth - el.clientWidth) / 2;
    container.scrollLeft = Math.max(0, target);
  }, [tab]);

  function stepTab(dir) {
    const idx = TABS.findIndex((t) => t.key === tab);
    const next = TABS[Math.min(TABS.length - 1, Math.max(0, idx + dir))];
    setTab(next.key);
  }

  return (
    <div className="report-doc-wrap">
      <div className="report-doc">
        <div className="report-doc-letterhead">
          <div>
            <span className="report-doc-brand">CHARRED GUARD · WILDFIRE RISK ASSESSMENT</span>
            <h4>142 Ridgeline Dr</h4>
            <p>Essential Assessment · Wildfire Prepared Home Base criteria</p>
          </div>
          <div className="report-doc-risk">
            <span className="risk-badge">MODERATE RISK</span>
          </div>
        </div>

        <div className="report-doc-tabs-row">
          <TabArrow direction="left" onClick={() => stepTab(-1)} disabled={tabIndex === 0} />
          <div className="report-doc-tabs" ref={tabScrollRef}>
            {TABS.map((t) => {
              const count =
                t.key === "all" ? FINDINGS.length : FINDINGS.filter((f) => f.priority === t.key).length;
              return (
                <button
                  type="button"
                  key={t.key}
                  data-tab-key={t.key}
                  className={`report-doc-tab ${tab === t.key ? "active" : ""}`}
                  onClick={() => setTab(t.key)}
                >
                  {t.label} ({count})
                </button>
              );
            })}
          </div>
          <TabArrow direction="right" onClick={() => stepTab(1)} disabled={tabIndex === TABS.length - 1} />
        </div>

        <div className="report-doc-body">
          {visible.map((f) => {
            const expanded = openId === f.id;
            return (
              <div className={`report-doc-row ${expanded ? "expanded" : ""}`} key={f.id}>
                <div className="report-doc-row-head" onClick={() => setOpenId(expanded ? null : f.id)}>
                  <div className={`report-doc-mark ${f.priority}`}>
                    <MarkIcon priority={f.priority} />
                  </div>
                  <div className="info">
                    <h4>{f.title}</h4>
                    <p>
                      {f.zone} · {f.photos} photo{f.photos > 1 ? "s" : ""} attached
                    </p>
                  </div>
                  <span className={`report-doc-tag ${f.priority}`}>{f.tag}</span>
                  <svg
                    className="report-doc-chev"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="report-doc-row-detail">
                  <div className="report-doc-row-detail-inner">
                    <p>{f.detail}</p>
                    <div className="report-doc-photos">
                      {Array.from({ length: f.photos }).map((_, i) => (
                        <div className="report-doc-photo" key={i}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="13" r="4" />
                            <path d="M3 8h4l2-3h6l2 3h4v11H3z" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="report-doc-footer">
          <span>Page 1 of 6</span>
          <span>Generated by Charred Guard</span>
        </div>
      </div>
    </div>
  );
}
