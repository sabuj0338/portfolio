import Reveal from "../../components/reveal";
import SectionHeading from "../../components/section-heading";
import BackendIcon from "../../icons/backend-icon";
import CICDIcon from "../../icons/cicd-icon";
import CpuIcon from "../../icons/cpu-icon";
import SmartPhoneIcon from "../../icons/smartphone-icon";
import WebIcon from "../../icons/web-icon";

const services = [
  {
    Icon: WebIcon,
    meta: "45+ projects",
    title: "Web & desktop apps",
    body: "Next.js, React and Astro frontends, admin panels and dashboards, plus cross-platform desktop apps with Electron.js.",
  },
  {
    Icon: CICDIcon,
    meta: "Cloud",
    title: "Cloud & DevOps",
    body: "Docker, Kubernetes, AWS and Cloudflare — CI/CD, Nginx, load balancing and CDN strategy.",
  },
  {
    Icon: SmartPhoneIcon,
    meta: "15+ apps",
    title: "Mobile apps",
    body: "Android & iOS with Flutter — designed, built and published to Play Store and App Store.",
  },
  {
    Icon: CpuIcon,
    meta: "Python",
    title: "AI & RAG",
    body: "Context‑aware assistants with LLMs, FAISS vector search and FastAPI, wired into real products.",
  },
];

const backendTags = ["NestJS", "Go Fiber", "PostgreSQL", "Redis", "WebSockets"];

function IconTile({ Icon }: { Icon: (props: { className?: string }) => JSX.Element }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <Icon className="h-[22px] w-[22px]" />
    </span>
  );
}

export default function Service() {
  return (
    <section id="services" className="relative px-5 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          index="01"
          label="Services"
          title="End‑to‑end,"
          accent="from schema to screen."
          description="I own features across the stack — architecture, data, realtime, UI and the infrastructure that runs it."
        />

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          <Reveal className="col-span-full">
            <article className="card flex flex-wrap items-center gap-8 p-8">
              <div className="flex flex-[1_1_300px] flex-col gap-4">
                <div className="flex items-center justify-between">
                  <IconTile Icon={BackendIcon} />
                  <span className="font-mono text-xs text-primary">Core strength</span>
                </div>
                <h3 className="text-[26px] font-semibold tracking-tight">Scalable backends &amp; microservices</h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  NestJS and Go services, multi‑tenant SaaS, PostgreSQL tuning and Redis caching — built to stay fast
                  and up when traffic spikes.
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {backendTags.map((tag, i) => (
                    <span key={tag} className={`chip ${i === 0 ? "border-primary/40 text-fg" : ""}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ServiceDiagram />
            </article>
          </Reveal>

          {services.map(({ Icon, meta, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="card flex h-full flex-col gap-4 p-8">
                <div className="flex items-center justify-between">
                  <IconTile Icon={Icon} />
                  <span className="font-mono text-xs text-dim">{meta}</span>
                </div>
                <h3 className="text-[22px] font-semibold tracking-tight">{title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gateway → services → stores, with requests pulsing along the links.
function ServiceDiagram() {
  const links = [
    "M98 110 H140 V50 H170",
    "M98 110 H170",
    "M98 110 H140 V170 H170",
    "M262 50 H290 V110 H320",
    "M262 170 H290 V110 H320",
  ];
  const services = [
    { y: 32, label: "auth · nest" },
    { y: 92, label: "orders · nest" },
    { y: 152, label: "realtime · go" },
  ];
  const stores = [
    { y: 70, label: "postgres" },
    { y: 116, label: "redis" },
  ];

  return (
    <svg aria-hidden="true" viewBox="0 0 420 220" className="h-auto max-w-[460px] flex-[1_1_320px]">
      <rect x="0.5" y="0.5" width="419" height="219" rx="14" fill="#0a0d0c" stroke="rgba(255,255,255,0.08)" />
      <g fill="none" stroke="rgba(13,203,138,0.22)" strokeWidth="1.2">
        {links.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d="M262 110 H320" />
      </g>
      <g fill="none" stroke="#0dcb8a" strokeWidth="1.8" strokeLinecap="round">
        {links.map((d, i) => (
          <path key={d} className="svg-flow-fast" style={{ animationDelay: `${-i * 0.4}s` }} d={d} />
        ))}
      </g>
      <g fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">
        <rect x="18" y="88" width="80" height="44" rx="10" fill="#111614" stroke="rgba(13,203,138,0.5)" />
        <text x="58" y="115" fill="#e8eeeb">gateway</text>
        {services.map((s) => (
          <g key={s.label}>
            <rect x="170" y={s.y} width="92" height="36" rx="9" fill="#111614" stroke="rgba(255,255,255,0.12)" />
            <text x="216" y={s.y + 22} fill="#c9d3ce">{s.label}</text>
          </g>
        ))}
        {stores.map((s) => (
          <g key={s.label}>
            <rect x="320" y={s.y} width="84" height="34" rx="9" fill="#111614" stroke="rgba(255,255,255,0.12)" />
            <text x="362" y={s.y + 21} fill="#c9d3ce">{s.label}</text>
          </g>
        ))}
      </g>
      <text x="18" y="206" fill="#7f8b86" fontFamily="Geist Mono, monospace" fontSize="10">
        p95 38ms · 99.9% uptime
      </text>
    </svg>
  );
}
