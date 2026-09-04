import Link from "next/link";
import PageHero from "../../components/PageHero";
import FadeIn from "../../components/FadeIn";
import { Button } from "../../components/ui/button";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Built for property owners in Southern California's fire country.">
        Charred Guard was started to give homeowners the same zone-by-zone
        read on their fire risk that fire agencies use — explained in plain
        language, so you always know where things stand and what to do
        next, on your own timeline.
      </PageHero>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FadeIn delay={0}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm">
                <span className="mb-3 inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs tracking-wide text-ink-700">
                  WHY WE STARTED
                </span>
                <h3 className="text-lg font-bold text-ink-900">Reports people could act on</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Too many wildfire assessments end up as dense PDFs nobody
                  reads. We build reports that tell you the three things to fix
                  first, and why they matter.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm">
                <span className="mb-3 inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs tracking-wide text-ink-700">
                  HOW WE INSPECT
                </span>
                <h3 className="text-lg font-bold text-ink-900">The same standard, every time</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Every property is checked against the same Wildfire Prepared
                  Home criteria and local fire hazard data, so results are
                  consistent and comparable over time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm">
                <span className="mb-3 inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs tracking-wide text-ink-700">
                  WHO IT&rsquo;S FOR
                </span>
                <h3 className="text-lg font-bold text-ink-900">Owners, insurers, and inspectors</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Homeowners use our reports to plan hardening projects.
                  Insurers and agents use them to verify defensible space
                  compliance.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <FadeIn delay={0}>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-600">
                  Our approach
                </span>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                  Independent, criteria-based, and documented.
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <ul className="mt-5 grid gap-3">
                  <li className="flex items-start gap-2.5 text-sm text-ink-600">
                    <span className="mt-0.5 shrink-0 text-ink-900"><CheckIcon /></span>
                    <span>
                      <strong className="text-ink-900">Independent.</strong> We assess your property, we
                      don&rsquo;t sell the fix, keeping the incentive on getting
                      the finding right.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-ink-600">
                    <span className="mt-0.5 shrink-0 text-ink-900"><CheckIcon /></span>
                    <span>
                      <strong className="text-ink-900">Criteria-based.</strong> Findings are measured
                      against Wildfire Prepared Home&rsquo;s published criteria
                      and California Fire Hazard Severity Zone data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-ink-600">
                    <span className="mt-0.5 shrink-0 text-ink-900"><CheckIcon /></span>
                    <span>
                      <strong className="text-ink-900">Documented.</strong> Every finding is
                      photo-documented and organized by zone, so the report
                      holds up whether it&rsquo;s shown to a contractor, an
                      insurer, or yourself in a year.
                    </span>
                  </li>
                </ul>
              </FadeIn>
            </div>
            <FadeIn delay={0}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/fr0ggy5-lGrpmwub2D8-unsplash.jpg"
                  alt="Home surrounded by forest in a wildland-urban interface setting"
                  className="block h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-lg">
                  <span className="block font-mono text-xl font-bold leading-tight text-ink-900">0%</span>
                  <span className="text-xs text-ink-600">Mitigation work sold</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <FadeIn>
            <div
              className="flex flex-col items-center gap-6 rounded-2xl bg-cover bg-center px-8 py-12 text-center text-white md:flex-row md:justify-between md:px-14 md:py-14 md:text-left"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(14,24,33,.9), rgba(23,36,49,.72)), url('/pexels-solyartphotos-35817822.jpg')",
              }}
            >
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  Want to know your risk zones?
                </h2>
                <p className="mt-2 max-w-md text-white/75">
                  Answer a few questions and get a package recommendation for your property.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
