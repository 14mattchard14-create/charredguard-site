"use client";

import { useState } from "react";

const HOTSPOTS = [
  {
    id: "roof",
    zoneId: "structure",
    left: 67,
    top: 41,
    title: "Roof",
    range: "STRUCTURE",
    body: "Tile, shingle, or shake — material, condition, and any debris or moss buildup that could ignite from a falling ember.",
  },
  {
    id: "vents",
    zoneId: "structure",
    left: 46,
    top: 39,
    title: "Vents",
    range: "STRUCTURE",
    body: "Roof, eave, and crawlspace vents, checked for ember-resistant mesh screening — a common and easy-to-miss failure point.",
  },
  {
    id: "gutters",
    zoneId: "structure",
    left: 75,
    top: 48,
    title: "Gutters",
    range: "STRUCTURE",
    body: "Material and debris buildup along the roofline. Clogged or combustible gutters are a direct ember trap.",
  },
  {
    id: "windows",
    zoneId: "structure",
    left: 63,
    top: 44,
    title: "Windows",
    range: "STRUCTURE",
    body: "Frame material and glazing type, since radiant heat can fail a window well before flames arrive.",
  },
  {
    id: "siding",
    zoneId: "structure",
    left: 59,
    top: 53,
    title: "Walls & Siding",
    range: "STRUCTURE",
    body: "Exterior wall material and the six inches of noncombustible clearance at its base — stucco and fiber cement resist ignition far better than exposed wood.",
  },
  {
    id: "zone0",
    zoneId: "noncombustible",
    left: 43,
    top: 63,
    title: "Noncombustible Zone (0–5 ft)",
    range: "0–5 FT",
    body: "The five feet immediately against your walls — the single highest-impact zone for stopping ember ignition. Hardscape and gravel here, not mulch.",
  },
  {
    id: "defensible",
    zoneId: "defensible-space",
    left: 43,
    top: 79,
    title: "Defensible Space (5–30 ft)",
    range: "5–30 FT",
    body: "Vegetation spacing and fuel reduction that slows a fire down and gives responders room to work.",
  },
];

const ZONES = [
  {
    id: "noncombustible",
    range: "0–5 FT",
    title: "Noncombustible Zone",
    body: "The five feet closest to your walls, cleared of anything that can carry an ember into the structure.",
  },
  {
    id: "defensible-space",
    range: "5–30 FT",
    title: "Defensible Space",
    body: "Vegetation spacing and fuel reduction that slows a fire down before it reaches your home.",
  },
  {
    id: "structure",
    range: "STRUCTURE",
    title: "Roof, Vents & Siding",
    body: "The hardening details, screens, gutters, wall clearance, that stop embers from finding a way in.",
  },
  {
    id: "access",
    range: "ACCESS",
    title: "Access & Address",
    body: "Not part of the official WPH checklist — we check it anyway, since emergency crews finding and reaching you matters just as much on the day it counts.",
  },
];

export default function InteractiveHouse() {
  const [active, setActive] = useState(null);

  const activeHotspot = active?.startsWith("hotspot:")
    ? HOTSPOTS.find((h) => h.id === active.slice(8))
    : null;
  const activeZoneId = active?.startsWith("zone:")
    ? active.slice(5)
    : activeHotspot
    ? activeHotspot.zoneId
    : null;
  const activeZone = ZONES.find((z) => z.id === activeZoneId);

  function toggleHotspot(id) {
    const key = `hotspot:${id}`;
    setActive(active === key ? null : key);
  }

  function toggleZone(id) {
    const key = `zone:${id}`;
    setActive(active === key ? null : key);
  }

  return (
    <div className="house-explorer">
      <div className="house-diagram-wrap">
        <span className="house-diagram-tag">Real property example</span>
        <img
          src="/aerial-mediterranean-home.png"
          alt="Aerial view of a home with clickable wildfire inspection points"
        />

        {HOTSPOTS.map((h) => (
          <button
            key={h.id}
            type="button"
            className={`hotspot ${active === `hotspot:${h.id}` ? "active" : ""}`}
            style={{ left: `${h.left}%`, top: `${h.top}%` }}
            onClick={() => toggleHotspot(h.id)}
            aria-label={h.title}
          >
            <span className="hotspot-label">{h.title}</span>
            <span className="hotspot-dot" />
          </button>
        ))}
      </div>

      <div className="house-panel">
        {activeHotspot ? (
          <>
            <span className="hero-eyebrow">{activeHotspot.range}</span>
            <h3>{activeHotspot.title}</h3>
            <p>{activeHotspot.body}</p>
          </>
        ) : activeZone ? (
          <>
            <span className="hero-eyebrow">{activeZone.range}</span>
            <h3>{activeZone.title}</h3>
            <p>{activeZone.body}</p>
          </>
        ) : (
          <>
            <span className="hero-eyebrow">Explore this home</span>
            <h3>Tap a marker to see what we check</h3>
            <p>Seven points on the photo, grouped into the four zones we write every report against — shown here on a real assessed property.</p>
          </>
        )}
      </div>

      <div className="hotspot-chips">
        {ZONES.map((z) => (
          <button
            key={z.id}
            type="button"
            className={`hotspot-chip ${activeZoneId === z.id ? "active" : ""}`}
            onClick={() => toggleZone(z.id)}
          >
            {z.title}
          </button>
        ))}
      </div>
    </div>
  );
}
