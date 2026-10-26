import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Reveal from "../../components/reveal";
import SectionHeading from "../../components/section-heading";
import WindowBar from "../../components/window-bar";
import ArrowMoveRightIcon from "../../icons/arrow-move-right-icon";
import ArrowUpRightIcon from "../../icons/arrow-up-right-icon";
import getData from "../../utils/getData";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "ai", label: "AI" },
  { id: "mobile", label: "Mobile" },
  { id: "package", label: "Open source" },
];

const toneClass: Record<PreviewTone, string> = {
  command: "text-fg-soft",
  muted: "text-muted",
  keyword: "text-[#c792ea]",
  string: "text-primary-soft",
  comment: "text-dim",
  success: "text-primary-soft",
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  const projects = useMemo(() => query.data?.projects ?? [], [query.data]);
  const visible = filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="work" className="relative px-5 py-24">
      {/* Dot field fading out from the top of the section */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[400px] w-full opacity-60">
        <defs>
          <pattern id="work-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.08)" />
          </pattern>
          <linearGradient id="work-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="work-mask">
            <rect width="100%" height="100%" fill="url(#work-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#work-dots)" mask="url(#work-mask)" />
      </svg>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="03" label="Selected work" title="Shipped, live," accent="in production." />

          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex flex-wrap gap-1.5 rounded-[14px] border border-white/[0.08] bg-deep p-[5px]"
          >
            {filters.map((f) => {
              const active = f.id === filter;
              const count = f.id === "all" ? projects.length : projects.filter((p) => p.categories.includes(f.id as ProjectCategory)).length;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={`min-h-[40px] rounded-[10px] px-3.5 text-[13.5px] font-medium transition-colors ${
                    active ? "bg-primary text-ink" : "text-muted hover:text-fg"
                  }`}
                >
                  {f.label}
                  <span className="ml-1.5 font-mono text-[11px] opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-5">
          {query.isLoading && Array.from({ length: 6 }, (_, i) => <ProjectCard key={i} />)}
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="https://github.com/sabuj0338" className="btn-ghost">
            See all 30+ projects
            <ArrowMoveRightIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}

interface IProjectCard {
  project?: IProject;
}

export function ProjectCard({ project }: IProjectCard) {
  if (!project) {
    return (
      <div className="animate-pulse overflow-hidden rounded-[20px] border border-white/[0.08] bg-surface">
        <div className="m-3 mb-0 aspect-[16/10] rounded-t-xl bg-raised" />
        <div className="flex flex-col gap-3 p-6">
          <div className="h-2.5 w-24 rounded-full bg-raised" />
          <div className="h-4 w-3/4 rounded-full bg-raised" />
          <div className="h-2.5 w-full rounded-full bg-raised" />
          <div className="h-2.5 w-2/3 rounded-full bg-raised" />
        </div>
      </div>
    );
  }

  const image = project.images[0];

  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className="px-3 pt-3">
        <div className="overflow-hidden rounded-t-xl border border-b-0 border-white/[0.08] bg-deep">
          <WindowBar title={project.host} size="sm" />
          <div className="aspect-[16/10] overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-700 ease-out-expo group-hover:scale-[1.04]"
              />
            ) : (
              <div className="h-full bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:16px_16px] p-[22px] font-mono text-[12.5px] leading-[1.95]">
                {project.preview?.map((line) => (
                  <p key={line.text} className="truncate">
                    <span className="text-primary">{line.prefix}</span>{" "}
                    <span className={toneClass[line.tone]}>{line.text}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-[22px]">
        <div className="flex min-h-[36px] items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-primary">{project.label}</span>
          {project.live_url ? (
            <a
              href={project.live_url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 text-muted transition-colors group-hover:text-primary"
            >
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]" />
            </a>
          ) : (
            <span className="font-mono text-[11px] text-dim">Private · NDA</span>
          )}
        </div>
        <h3 className="text-xl font-semibold leading-tight tracking-tight">{project.title}</h3>
        <p className="text-[14.5px] leading-relaxed text-muted">{project.short_description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-raised px-2 py-1 font-mono text-[11px] text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
