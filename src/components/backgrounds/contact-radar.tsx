// Concentric rings with a rotating radar beam and two pinging blips.
export default function ContactRadar() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="pointer-events-none absolute -right-36 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-90"
    >
      <defs>
        <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#0dcb8a" stopOpacity="0.18" />
          <stop offset="1" stopColor="#0dcb8a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="radar-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0dcb8a" stopOpacity="0" />
          <stop offset="1" stopColor="#0dcb8a" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="300" fill="url(#radar-glow)" />
      <g fill="none" stroke="rgba(13,203,138,0.18)">
        {[70, 140, 210, 280].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} />
        ))}
        <path d="M20 300H580M300 20V580" />
      </g>
      <g className="svg-sweep">
        <path d="M300 300 L580 300 A280 280 0 0 0 498 102 Z" fill="url(#radar-beam)" />
      </g>
      <circle cx="410" cy="220" r="4" fill="#0dcb8a" />
      <circle className="svg-node-ring" cx="410" cy="220" r="4" fill="none" stroke="#0dcb8a" />
      <circle cx="220" cy="420" r="3" fill="#0dcb8a" />
      <circle className="svg-node-ring" style={{ animationDelay: "1.2s" }} cx="220" cy="420" r="3" fill="none" stroke="#0dcb8a" />
    </svg>
  );
}
