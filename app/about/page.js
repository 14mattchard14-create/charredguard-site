import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="hero-eyebrow">About</span>
          <h1>Built for property owners in fire country.</h1>
          <p>
            Charred Guard was started to give homeowners the same
            zone-by-zone read on their fire risk that fire agencies use, in
            language that's actually useful before a fire, not just after
            one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="steps">
            <div className="step">
              <span className="num">WHY WE STARTED</span>
              <h3>Reports people could act on</h3>
              <p>
                Too many wildfire assessments end up as dense PDFs nobody
                reads. We build reports that tell you the three things to fix
                first, and why they matter.
              </p>
            </div>
            <div className="step">
              <span className="num">HOW WE INSPECT</span>
              <h3>The same standard, every time</h3>
              <p>
                Every property is checked against the same Wildfire Prepared
                Home criteria and local fire hazard data, so results are
                consistent and comparable over time.
              </p>
            </div>
            <div className="step">
              <span className="num">WHO IT'S FOR</span>
              <h3>Owners, insurers, and inspectors</h3>
              <p>
                Homeowners use our reports to plan hardening projects.
                Insurers and agents use them to verify defensible space
                compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="cta-block">
            <div>
              <h2>Want to know your risk zones?</h2>
              <p>Book an inspection and we'll walk your property this week.</p>
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
