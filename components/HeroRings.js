export default function HeroRings() {
  return (
    <svg
      className="hero-rings"
      viewBox="0 0 400 400"
      role="img"
      aria-label="Illustration of a home surrounded by concentric wildfire defensible-space zones"
    >
      <circle cx="200" cy="210" r="185" fill="#f9e6e2" />
      <circle cx="200" cy="210" r="135" fill="#f5ede5" />
      <circle cx="200" cy="210" r="85" fill="#e4eaf0" />

      <circle cx="200" cy="210" r="185" fill="none" stroke="#b5483a" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 6" />
      <circle cx="200" cy="210" r="135" fill="none" stroke="#a8876d" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="2 6" />

      <text x="200" y="34" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="1.5" fill="#b5483a" fontWeight="600">
        EMBER ZONE
      </text>
      <text x="200" y="84" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="1.5" fill="#8a6d54" fontWeight="600">
        5&#8211;30 FT
      </text>

      <g transform="translate(200,210)">
        <rect x="-52" y="-6" width="104" height="66" rx="4" fill="#2c4257" />
        <polygon points="-64,-6 0,-56 64,-6" fill="#1a2632" />
        <rect x="-14" y="20" width="28" height="40" rx="2" fill="#eef2f5" />
        <rect x="-38" y="10" width="18" height="18" rx="2" fill="#a8876d" />
        <rect x="20" y="10" width="18" height="18" rx="2" fill="#a8876d" />
      </g>

      <circle cx="200" cy="210" r="85" fill="none" stroke="#5c7080" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="2 6" />
      <text x="200" y="308" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="1.5" fill="#5c7080" fontWeight="600">
        0&#8211;5 FT
      </text>
    </svg>
  );
}
