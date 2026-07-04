export default function ZoneBand({ tight = false, labeled = true }) {
  return (
    <div className={`zone-band ${tight ? "tight" : ""}`}>
      <div className="seg seg-structure" data-label={labeled ? "STRUCTURE" : ""} />
      <div className="seg seg-noncombustible" data-label={labeled ? "0–5 FT" : ""} />
      <div className="seg seg-defensible" data-label={labeled ? "5–30 FT" : ""} />
      <div className="seg seg-ember" data-label={labeled ? "EMBER ZONE" : ""} />
    </div>
  );
}
