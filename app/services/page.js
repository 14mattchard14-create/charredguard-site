import Link from "next/link";
import ZoneBand from "../../components/ZoneBand";
import PageHero from "../../components/PageHero";
import FadeIn from "../../components/FadeIn";
import { Button } from "../../components/ui/button";

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
      <PageHero eyebrow="Services" title="A full Wildfire Prepared Home inspection, zone by zone.">
        We assess eight categories across your property, from the ground
        immediately at your foundation out to your access road, using
        Wildfire Prepared Home (WPH) criteria and local Fire Hazard Severity
        Zone (FHSZ) data.
      </PageHero>

      <div className="bg-white pt-10">
        <div className="wrap">
          <ZoneBand />
        </div>
      </div>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {categories.map((c, i) => (
              <FadeIn key={c.title} delay={(i % 2) * 100}>
                <div className="h-full rounded-xl border border-surface-line bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md">
                  <span className="mb-2 block font-mono text-xs tracking-wide text-ink-600">{c.range}</span>
                  <h3 className="text-base font-bold text-ink-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
          <FadeIn>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-300">
              Statewide coverage
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              From coastal chaparral to Sierra foothill forest.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85">
              Every report is checked against the Fire Hazard Severity Zone
              your property actually sits in, not a generic checklist.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface-muted py-16 md:py-20">
        <div className="wrap">
          <div className="mb-10 max-w-xl">
            <FadeIn>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">
                What you receive
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 md:text-3xl">
                A report built to be used, not filed away.
              </h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FadeIn delay={0}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
                <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 font-mono text-xs tracking-wide text-brand-600">
                  RISK RATING
                </span>
                <h3 className="text-lg font-bold text-ink-900">Overall risk snapshot</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  A single, clear rating plus a narrative summary of what it&rsquo;s based on.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
                <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 font-mono text-xs tracking-wide text-brand-600">
                  PRIORITIES
                </span>
                <h3 className="text-lg font-bold text-ink-900">Ranked action plan</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Findings sorted by what matters most first, not just the order we walked the site.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="h-full rounded-2xl border border-surface-line bg-white p-7 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
                <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 font-mono text-xs tracking-wide text-brand-600">
                  EVIDENCE
                </span>
                <h3 className="text-lg font-bold text-ink-900">Photos, by zone</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Every finding backed by a photo, organized so you can see exactly what we saw.
                </p>
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
                  Ready to schedule?
                </h2>
                <p className="mt-2 max-w-md text-white/75">
                  Answer a few questions, get your package recommendation, and most inspections are booked within a week.
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
