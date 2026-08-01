import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 px-0 pb-7 pt-12 text-white/70">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-10">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <img src="/logo-white.png" alt="Charred Guard shield logo" className="h-10 w-auto" />
              <strong className="text-white">Charred Guard</strong>
            </div>
            <p className="max-w-[34ch] text-sm text-white/60">
              Wildfire Prepared Home inspections and defensible-space
              assessments for property owners in fire-prone areas.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-wider text-white">Company</h4>
            <Link href="/get-started" className="mb-2.5 block text-[0.92rem] text-white/70 no-underline hover:text-white">
              Get Started
            </Link>
            <Link href="/services" className="mb-2.5 block text-[0.92rem] text-white/70 no-underline hover:text-white">
              Services
            </Link>
            <Link href="/about" className="mb-2.5 block text-[0.92rem] text-white/70 no-underline hover:text-white">
              About
            </Link>
            <Link href="/contact" className="mb-2.5 block text-[0.92rem] text-white/70 no-underline hover:text-white">
              Contact
            </Link>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-wider text-white">Get in touch</h4>
            <a href="mailto:hello@charredguard.com" className="mb-2.5 block text-[0.92rem] text-white/70 no-underline hover:text-white">
              hello@charredguard.com
            </a>
            <Link href="/contact" className="mb-2.5 block text-[0.92rem] text-white/70 no-underline hover:text-white">
              Book a 15-min call
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2.5 pt-5 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Charred Guard. All rights reserved.</span>
          <span>Serving fire-prone communities</span>
        </div>
        <p className="mt-2.5 max-w-[640px] text-[0.78rem] leading-relaxed text-white/45">
          Charred Guard inspections reference the Wildfire Prepared Home (WPH)
          program criteria and California Fire Hazard Severity Zone (FHSZ)
          data as informational guidance. Findings do not constitute a
          certification, warranty, or guarantee against wildfire damage, and
          should be confirmed with your local fire authority and insurer.
        </p>
      </div>
    </footer>
  );
}
