import Link from "next/link";
import ZoneBand from "../components/ZoneBand";
import InteractiveHouse from "../components/InteractiveHouse";
import ReportPreview from "../components/ReportPreview";
import ProcessStepper from "../components/ProcessStepper";
import { Button } from "../components/ui/button";
import FadeIn from "../components/FadeIn";

function HeroCheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const faqs = [
  {
    q: "Is this the same as getting Wildfire Prepared Home certified?",
    a: "No. Charred Guard's assessment is independent of the official Wildfire Prepared Home certification process. We measure your property against the same published criteria, but the actual designation is issued separately by IBHS after their own verification. Our report is meant to get you ready for that step, not replace it.",
  },
  {
    q: "What's the difference between Essential and Enhanced?",
    a: "They're our two package levels, named after Wildfire Prepared Home's own Base and Plus criteria. Essential covers ember protection — the 0–5ft zone, defensible space, roof, gutters, and vents. Enhanced adds structural hardening like siding, windows, doors, decks, and eaves, and fits best if you're renovating or building new. Either way, we look at the same property — the package determines which criteria your report is written against.",
  },
  {
    q: "Do you inspect in person, or remotely?",
    a: "Remotely. Our Get Started flow walks you through a short property questionnaire and a free optional call, then you complete a guided photo walkthrough yourself with your phone — no visit to schedule.",
  },
  {
    q: "Is a phone-guided assessment thorough?",
    a: "Yes. It's checked against the exact same Wildfire Prepared Home criteria as any professional inspection. Guided Photo Assessment walks you through exactly what to photograph and from what angle, so nothing gets missed — and it's faster to start since there's no visit to schedule.",
  },
  {
    q: "How long does the whole process take?",
    a: "You can start your guided walkthrough the same day — no waiting on a scheduled visit — and you'll have a written, prioritized report within about 48 hours of submitting your photos.",
  },
  {
    q: "What happens after I get my report?",
    a: "You'll get a ranked list of what to fix first, with photo evidence for every finding. Once the work is done, additional documentation support — for certification readiness at wildfireprepared.org, or something formatted for your insurance provider — may be available on a case-by-case basis.",
  },
  {
    q: "I'm selling my home in a high fire-hazard zone — does this help?",
    a: "It can. California's AB-38 law (Civil Code 1102.19) requires sellers in a High or Very High Fire Hazard Severity Zone to give buyers documentation of defensible space compliance before closing. We don't issue that official paperwork — only your local fire department can — but our assessment flags likely issues ahead of time, so you're not scrambling to fix things mid-escrow. Real estate agents are welcome to reach out too.",
  },
  {
    q: "Will this get me an insurance discount or official certification?",
    a: "Not automatically — both depend on your specific property and, for insurance, on your individual carrier. Our report shows exactly where your home stands against Wildfire Prepared Home criteria, but whether an insurer offers a discount is entirely their own policy, and official certification requires every required criterion to be met, verified separately by IBHS. Some properties qualify after one round of fixes; others need more work first. We'll tell you honestly where yours stands, either way.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative bg-ink-900 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 600px at 15% -10%, rgba(193,80,46,0.35), transparent 60%), radial-gradient(ellipse 700px 500px at 100% 0%, rgba(87,105,117,0.25), transparent 60%)",
          }}
        />
        <div className="wrap relative pb-12 pt-8 md:pb-16 md:pt-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-wider text-white/90 backdrop-blur">
              Wildfire Home Hardening Inspections
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl">
              Guard your home. Start with{" "}
              <span className="text-brand-400">knowing your risk</span>.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">
              Every property gets evaluated zone by zone against Wildfire
              Prepared Home standards through a guided walkthrough you
              complete yourself, then you get a clear, prioritized report
              that meets you where you are, with a clear next step.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/services">See what we check</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-white/70">
              <span className="inline-flex items-center gap-2">
                <span className="text-emerald-400">
                  <HeroCheckIcon />
                </span>
                Free 15-minute consultation
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-emerald-400">
                  <HeroCheckIcon />
                </span>
                Flat-fee pricing
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-emerald-400">
                  <HeroCheckIcon />
                </span>
                Scoped to WPH criteria
              </span>
            </div>
          </div>
        </div>
        <div className="zone-band-wrap">
          <div className="wrap">
            <p className="caption">The four zones we assess</p>
            <ZoneBand />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <div className="mb-10 max-w-xl">
            <FadeIn delay={0}>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">
                What we inspect
              </span>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                A full picture of your property, zone by zone.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                Tap a marker on the photo for a specific detail, or a zone
                below it for the bigger picture — from the ground right up to
                your roofline.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={300}>
            <InteractiveHouse />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn delay={0}>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">
                Insurance
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                From risk to coverage — know where you stand.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                California&rsquo;s insurance market has gotten unforgiving
                for homes in fire-prone areas. Your assessment replaces that
                uncertainty with something concrete — documented proof of
                what&rsquo;s driving your risk, and what to fix first.
                Knowing exactly where you stand is where progress starts.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-20">
        <div className="wrap">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <FadeIn delay={0}>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">
                How it works
              </span>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                How your assessment becomes an action plan.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                You don&rsquo;t need to know anything about wildfire hardening
                going in — here&rsquo;s every step, in plain terms, from
                entering your address to an entirely optional follow-up report
                at the end.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <ProcessStepper />
          </FadeIn>
        </div>
      </section>

      <section
        className="bg-cover bg-center py-20 text-center text-white md:py-24"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(14,24,33,.72), rgba(23,36,49,.72)), url('/pexels-solyartphotos-35817822.jpg')",
        }}
      >
        <div className="wrap mx-auto max-w-2xl">
          <FadeIn delay={0}>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-300">
              Where we work
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Serving property owners across Southern California.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85">
              From coastal chaparral to inland foothill canyons, every report
              is checked against the Fire Hazard Severity Zone your property
              actually sits in — not a generic checklist. Since your
              assessment is guided remotely, there&rsquo;s no travel radius
              to worry about — we work with homeowners throughout Southern
              California.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-20">
        <div className="wrap">
          <div className="mb-10 max-w-xl">
            <FadeIn delay={0}>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">
                Service options
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                Pick the level of inspection you need.
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FadeIn delay={0}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="6" y="2" width="12" height="20" rx="2" />
                    <path d="M10 5h4" strokeLinecap="round" />
                    <circle cx="12" cy="17" r="1.3" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ink-900">Guided Photo Assessment</h3>
                <span className="mb-2 mt-1 block font-mono text-xl font-bold text-brand-600">From $200</span>
                <p className="text-sm leading-relaxed text-ink-600">
                  A guided walkthrough you complete yourself with your phone,
                  reviewed and written up by us. Start today — no waiting on
                  a scheduled visit.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="mb-1.5 block font-mono text-xs tracking-wide text-ink-600">MAY BE AVAILABLE</span>
                <h3 className="text-lg font-bold text-ink-900">Additional Services</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Once your hardening work is done, follow-up documentation
                  — for certification readiness, your insurance provider, or
                  both — may be available on a case-by-case basis. Reach out
                  to ask.
                </p>
              </div>
            </FadeIn>
          </div>
          <p className="mt-6 text-sm text-ink-600">
            Price shown is a typical starting rate — answer a few questions to get your exact quote based on package and property size.
          </p>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-20">
        <div className="wrap">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <FadeIn delay={0}>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">
                What you actually get
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                A look inside your report.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-600">
                This is a sample page. Filter by priority, or click a finding
                to see why it matters.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={150}>
            <ReportPreview />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <FadeIn delay={0}>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">
                Questions
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                Frequently asked.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={150}>
            <div className="mx-auto max-w-3xl divide-y divide-surface-line">
              {faqs.map((f) => (
                <details className="group py-4" key={f.q}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <svg
                      className="shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="max-w-[68ch] pb-1 pt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <FadeIn delay={0}>
            <div
              className="flex flex-col items-center gap-6 rounded-2xl bg-cover bg-center px-8 py-12 text-center text-white md:flex-row md:justify-between md:px-14 md:py-14 md:text-left"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(14,24,33,.9), rgba(23,36,49,.72)), url('/pexels-solyartphotos-35817822.jpg')",
              }}
            >
              <div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  Ready to see where you stand?
                </h2>
                <p className="mt-2 max-w-md text-white/75">
                  Answer a few questions, get a package recommendation, and start your assessment.
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
