import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <img src="/logo-white.png" alt="Charred Guard shield logo" />
          <span className="brand-word">
            Charred Guard
            <span>Wildfire Home Hardening</span>
          </span>
        </Link>
        <nav className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary">
            Request Inspection
          </Link>
        </div>
      </div>
    </header>
  );
}
