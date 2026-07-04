import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/logo-white.png" alt="Charred Guard shield logo" />
              <strong style={{ color: "#fff" }}>Charred Guard</strong>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", maxWidth: "34ch" }}>
              Wildfire Prepared Home inspections and defensible-space
              assessments for property owners in fire-prone areas.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href="mailto:hello@charredguard.com">hello@charredguard.com</a>
            <a href="tel:+18005550123">(800) 555-0123</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Charred Guard. All rights reserved.</span>
          <span>Serving fire-prone communities</span>
        </div>
        <p className="footer-disclaimer">
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
