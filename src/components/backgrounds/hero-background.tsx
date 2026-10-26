// Blueprint grid with circuit traces; a pulse travels along each trace and the end nodes ring.
const traces = [
  { d: "M0 672 H240 L288 624 H528 L576 576 H720", end: [720, 576], style: {} },
  { d: "M1440 192 H1200 L1152 240 H960 L912 288 H816", end: [816, 288], style: { animationDuration: "8s", animationDelay: "-2s" } },
  { d: "M1440 720 H1248 L1200 672 H1056 V528 L1008 480", end: [1008, 480], style: { animationDuration: "7s", animationDelay: "-4s" } },
  { d: "M144 0 V144 L192 192 H384 L432 240", end: [432, 240], style: { animationDuration: "8s", animationDelay: "-1s" } },
];

export default function HeroBackground() {
  return (
    <>
      {/* Grid in its own unscaled layer so cells stay 48px at any hero height */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,0.05)" />
          </pattern>
          <radialGradient id="hero-fade" cx="50%" cy="40%" r="65%">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-grid-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-grid-mask)" />
      </svg>
      <HeroCircuits />
    </>
  );
}

function HeroCircuits() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 920"
      preserveAspectRatio="xMidYMin slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#0dcb8a" stopOpacity="0.22" />
          <stop offset="1" stopColor="#0dcb8a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="1060" cy="380" rx="560" ry="420" fill="url(#hero-glow)" />

      {traces.map((trace, i) => (
        <g key={trace.d}>
          <path d={trace.d} fill="none" stroke="rgba(13,203,138,0.16)" strokeWidth="1.2" />
          <path
            className="svg-flow"
            style={trace.style}
            d={trace.d}
            fill="none"
            stroke="#0dcb8a"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx={trace.end[0]} cy={trace.end[1]} r="3" fill="#0dcb8a" />
          <circle
            className="svg-node-ring"
            style={{ animationDelay: `${i * 0.6}s` }}
            cx={trace.end[0]}
            cy={trace.end[1]}
            r="3"
            fill="none"
            stroke="#0dcb8a"
          />
        </g>
      ))}
    </svg>
  );
}
