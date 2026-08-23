"use client";

import { useEffect, useRef, useState } from "react";

// Same four zones/definitions used by InteractiveHouse.js's tap-explorer —
// kept in sync intentionally so a homeowner sees the same explanation
// whether they tap the hero band or the house diagram further down the page.
const ZONES = [
  {
    id: "structure",
    className: "seg-structure",
    label: "STRUCTURE",
    title: "Roof, Vents & Siding",
    body: "The hardening details — screens, gutters, wall clearance — that stop embers from finding a way in.",
  },
  {
    id: "noncombustible",
    className: "seg-noncombustible",
    label: "0–5 FT",
    title: "Noncombustible Zone",
    body: "The five feet closest to your walls, cleared of anything that can carry an ember into the structure.",
  },
  {
    id: "defensible",
    className: "seg-defensible",
    label: "5–30 FT",
    title: "Defensible Space",
    body: "Vegetation spacing and fuel reduction that slows a fire down before it reaches your home.",
  },
  {
    id: "access",
    className: "seg-access",
    label: "ACCESS",
    title: "Access & Address",
    body: "Not part of the official WPH checklist — but we check it anyway, because emergency crews being able to find and reach you matters just as much on the day it counts.",
  },
];

export default function ZoneBand({ tight = false, labeled = true }) {
  const [openId, setOpenId] = useState(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!openId) return;
    function onDocPointerDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpenId(null);
      }
    }
    document.addEventListener("mousedown", onDocPointerDown);
    return () => document.removeEventListener("mousedown", onDocPointerDown);
  }, [openId]);

  return (
    <div className={`zone-band ${tight ? "tight" : ""}`} ref={wrapRef}>
      {ZONES.map((z) => (
        <button
          key={z.id}
          type="button"
          className={`seg ${z.className}`}
          data-label={labeled ? z.label : ""}
          aria-expanded={openId === z.id}
          onClick={() => setOpenId((cur) => (cur === z.id ? null : z.id))}
        >
          {openId === z.id && (
            <span className="seg-popover" role="tooltip">
              <span className="seg-popover-eyebrow">{z.label}</span>
              <span className="seg-popover-title">{z.title}</span>
              <span className="seg-popover-body">{z.body}</span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
