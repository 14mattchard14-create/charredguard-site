import Link from "next/link";
import ZoneBand from "../components/ZoneBand";

const zones = [
  {
    range: "0–5 FT",
    swatch: "seg-noncombustible",
    title: "Noncombustible Zone",
    body: "The five feet closest to your walls, cleared of anything that can carry an ember into the structure.",
  },
  {
    range: "5–30 FT",
    swatch: "seg-defensible",
    title: "Defensible Space",
    body: "Vegetation spacing and fuel reduction that slows a fire down before it reaches your home.",
  },
  {
    range: "STRUCTURE",
    swatch: "seg-structure",
    title: "Roof, Vents & Siding",
    body: "The hardening details, screens, gutters, wall clearance, that stop embers from finding a way in.",
  },
  {
    range: "EMBER ZONE",
    swatch: "seg-ember",
    title: "Access & Address",
    body: "Whether fire crews can find and reach your property in time, and whether it's marked clearly.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="hero-eyebrow">Wildfire Home Hardening Inspections</span>
            <h1>
              Know your property's <em>fire risk</em> before fire season does.
            </h1>
            <p className="lead">
              Charred Guard inspects your home zone by zone against Wildfire
              Prepared Home standards, then gives you a clear, prioritized
              report you can act on, or hand straight to your insurer.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Request an Inspection
              </Link>
              <Link href="/services" className="btn btn-outline">
                See what we check
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/logo.png" alt="Charred Guard shield emblem" />
          </div>
        </div>
        <div className="zone-band-wrap">
          <div className="wrap">
            <ZoneBand />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="hero-eyebrow">What we inspect</span>
            <h2>Four zones, one report.</h2>
            <p>
              Every inspection follows the same defensible-space structure
              fire agencies use, from the ground right up to your roofline.
            </p>
          </div>
          <div className="zone-grid">
            {zones.map((z) => (
              <div className="zone-card" key={z.title}>
                <div className={`swatch ${z.swatch}`} />
                <span className="range">{z.range}</span>
                <h3>{z.title}</h3>
                <p>{z.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="hero-eyebrow">How it works</span>
            <h2>From walkthrough to certification.</h2>
          </div>
          <div className="steps steps-4">
            <div className="step">
              <span className="num">01 · SCHEDULE</span>
              <h3>Book a walkthrough</h3>
              <p>Pick a time, tell us about the property, we handle the rest.</p>
            </div>
            <div className="step">
              <span className="num">02 · INSPECT</span>
              <h3>We walk the property</h3>
              <p>
                Every zone checked against WPH criteria, with photos as
                evidence.
              </p>
            </div>
            <div className="step">
              <span className="num">03 · REPORT</span>
              <h3>Get your action plan</h3>
              <p>
                A ranked report within 48 hours, telling you what to fix
                first.
              </p>
            </div>
            <div className="step">
              <span className="num">04 · CERTIFY</span>
              <h3>Harden, then apply</h3>
              <p>
                Re-inspect once work is done, and apply for Wildfire
                Prepared Home designation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section stat-band">
        <div className="wrap">
          <div className="stat-grid">
            <div>
              <span className="stat-num">15</span>
              <span className="stat-label">WPH categories checked per property</span>
            </div>
            <div>
              <span className="stat-num">48 HR</span>
              <span className="stat-label">Typical report turnaround</span>
            </div>
            <div>
              <span className="stat-num">0–30 FT</span>
              <span className="stat-label">Defensible space fully assessed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="hero-eyebrow">Service options</span>
            <h2>Pick the level of inspection you need.</h2>
          </div>
          <div className="zone-grid zone-grid-3">
            <div className="zone-card">
              <span className="range">REMOTE</span>
              <h3>Photo Review</h3>
              <p>
                Send photos of your property, get a preliminary risk read
                and priority list back, no walkthrough required.
              </p>
            </div>
            <div className="zone-card">
              <span className="range">MOST COMMON</span>
              <h3>On-Site Inspection</h3>
              <p>
                A full zone-by-zone walkthrough and written report,
                covering every WPH category for your property.
              </p>
            </div>
            <div className="zone-card">
              <span className="range">FINAL STEP</span>
              <h3>Certification Inspection</h3>
              <p>
                For properties that have completed hardening work and are
                ready to apply for Wildfire Prepared Home designation.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 24, fontSize: "0.88rem", color: "var(--text-muted)" }}>
            Pricing depends on property size and location — reach out for a
            quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="hero-eyebrow">Choose your level</span>
            <h2>Base protection, or the enhanced standard.</h2>
            <p>
              Every inspection is scoped to one of two Wildfire Prepared
              Home levels, so you know exactly what you're being measured
              against.
            </p>
          </div>
          <div className="zone-grid zone-grid-2">
            <div className="zone-card">
              <span className="range">BASE · ESSENTIAL</span>
              <h3>Ember protection</h3>
              <p>
                Covers the leading cause of home ignitions: wind-blown
                embers. Focused on your 0–5ft zone, defensible space, roof,
                gutters, and vents. Best fit for most existing homes.
              </p>
            </div>
            <div className="zone-card">
              <span className="range">PLUS · ENHANCED</span>
              <h3>Flame &amp; radiant heat protection</h3>
              <p>
                Everything in Base, plus noncombustible siding, upgraded
                windows and doors, fire-rated decks, and enclosed eaves.
                Best fit for new construction or major renovations.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 28, fontSize: "0.95rem" }}>
            Ready to pursue an official designation? Our reports are scoped
            to Wildfire Prepared Home criteria, so you can apply directly at{" "}
            <a
              href="https://wildfireprepared.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-dark)", fontWeight: 600 }}
            >
              wildfireprepared.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="cta-block">
            <div>
              <h2>Ready to see where you stand?</h2>
              <p>Book an inspection and get a zone-by-zone report you can actually use.</p>
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
