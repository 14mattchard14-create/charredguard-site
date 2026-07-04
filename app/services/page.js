import Link from "next/link";
import ZoneBand from "../../components/ZoneBand";

const categories = [
  {
    range: "OVERALL SITE",
    title: "Site & Environmental Overview",
    body: "Terrain, slope, prevailing wind exposure, and surrounding vegetation that shape how fire would approach the property.",
  },
  {
    range: "0–5 FT",
    title: "Noncombustible Zone",
    body: "The five feet immediately around the structure, checked for mulch, plants, and debris that give embers a foothold.",
  },
  {
    range: "5–30 FT",
    title: "Defensible Space — Vegetation",
    body: "Plant spacing, canopy separation, and fuel load in the zone that gives you time before a fire reaches the home.",
  },
  {
    range: "10–30 FT",
    title: "Detached Structures & Large Items",
    body: "Sheds, wood piles, propane tanks, and anything else nearby that could ignite and carry fire toward the house.",
  },
  {
    range: "STRUCTURE",
    title: "Roof, Gutters, Wall Clearance & Vents",
    body: "The roofline and the 6-inch noncombustible clearance at the base of walls, plus ember-resistant vent screening.",
  },
  {
    range: "STRUCTURE",
    title: "Eaves, Soffits, Skylights & Siding",
    body: "Enclosed eaves, protected skylights, and exterior wall coverings rated to resist ember intrusion and radiant heat.",
  },
  {
    range: "STRUCTURE",
    title: "Windows, Doors, Decks & Patios",
    body: "Glazing, door seals, and any overhead structures attached to the home that could transmit fire into the interior.",
  },
  {
    range: "ACCESS",
    title: "Access & Address",
    body: "Whether emergency access routes are clear and your address is visible enough for crews to find you fast.",
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="hero-eyebrow">Services</span>
          <h1>A full Wildfire Prepared Home inspection, zone by zone.</h1>
          <p>
            We assess eight categories across your property, from the ground
            immediately at your foundation out to your access road, using
            Wildfire Prepared Home (WPH) criteria and local Fire Hazard
            Severity Zone (FHSZ) data.
          </p>
        </div>
      </section>

      <div style={{ background: "var(--surface)", paddingTop: 40 }}>
        <div className="wrap">
          <ZoneBand />
        </div>
      </div>

      <section className="section section-alt">
        <div className="wrap">
          <div className="zone-grid zone-grid-2">
            {categories.map((c) => (
              <div className="zone-card" key={c.title}>
                <span className="range">{c.range}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="hero-eyebrow">What you receive</span>
            <h2>A report built to be used, not filed away.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="num">RISK RATING</span>
              <h3>Overall risk snapshot</h3>
              <p>A single, clear rating plus a narrative summary of what it's based on.</p>
            </div>
            <div className="step">
              <span className="num">PRIORITIES</span>
              <h3>Ranked action plan</h3>
              <p>Findings sorted by what matters most first, not just the order we walked the site.</p>
            </div>
            <div className="step">
              <span className="num">EVIDENCE</span>
              <h3>Photos, by zone</h3>
              <p>Every finding backed by a photo, organized so you can see exactly what we saw.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="cta-block">
            <div>
              <h2>Ready to schedule?</h2>
              <p>Most inspections are booked within a week and reported back within 48 hours.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Request an Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
