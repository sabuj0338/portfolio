import { useQuery } from "@tanstack/react-query";
import Reveal from "../../components/reveal";
import GraduationCapIcon from "../../icons/graduation-cap-icon";
import getData from "../../utils/getData";

export default function Experience() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  const jobs = query.data?.experience ?? [];
  const education = query.data?.education;

  return (
    <section id="experience" className="relative px-5 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-wrap gap-14">
        <Reveal className="flex min-w-0 flex-[1_1_320px] flex-col gap-[18px]">
          <p className="font-mono text-[13px] text-primary">02 / Experience</p>
          <h2 className="text-[clamp(36px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Six years, <span className="font-serif font-normal italic tracking-normal text-muted">four teams.</span>
          </h2>
          <p className="max-w-[380px] text-base leading-relaxed text-muted">
            From realtime conferencing to national news and e‑commerce at scale — now leading architecture for
            platforms with millions of global users.
          </p>

          {education && (
            <div className="mt-3 flex max-w-[380px] items-center gap-4 rounded-2xl border border-white/[0.08] bg-deep p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCapIcon className="h-[22px] w-[22px]" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold">{education.degree}</span>
                <span className="font-mono text-xs text-dim">
                  {education.school} · {education.period}
                </span>
              </div>
            </div>
          )}
        </Reveal>

        <ol className="flex min-w-0 flex-[999_1_560px] flex-col gap-4">
          {jobs.map((job, i) => (
            <li key={job.company} className="relative pl-9">
              {/* Timeline rail and node */}
              {i < jobs.length - 1 && (
                <span aria-hidden="true" className="absolute -bottom-4 left-[7px] top-0 w-px bg-primary/25" />
              )}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[30px] h-[15px] w-[15px] rounded-full border-2 border-primary ${
                  job.current ? "bg-primary shadow-[0_0_0_6px_rgba(13,203,138,0.15)]" : "bg-ink"
                }`}
              />

              <Reveal delay={i * 80}>
                <article className="flex flex-col gap-3.5 rounded-[18px] border border-white/[0.08] bg-surface px-7 py-[26px] transition-colors duration-300 hover:border-primary/35 hover:bg-[#0e1311]">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                      <span className="text-[14.5px] text-muted">{job.role}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      {job.current && (
                        <span className="rounded-full bg-primary/[0.12] px-2.5 py-0.5 font-mono text-[11px] text-primary">
                          Current
                        </span>
                      )}
                      <span className="whitespace-nowrap font-mono text-xs text-dim">{job.period}</span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[15px] leading-[1.55] text-muted">
                        <span aria-hidden="true" className="font-mono text-primary">
                          →
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {job.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.metrics.map((metric) => (
                        <span
                          key={metric.label}
                          className="inline-flex items-baseline gap-1.5 rounded-[10px] border border-primary/25 bg-primary/5 px-3 py-1.5"
                        >
                          <span className="text-[15px] font-semibold text-primary">{metric.value}</span>
                          <span className="font-mono text-[11px] text-muted">{metric.label}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
