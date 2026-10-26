import HeroBackground from "../../components/backgrounds/hero-background";
import WindowBar from "../../components/window-bar";
import ArrowMoveRightIcon from "../../icons/arrow-move-right-icon";
import DownloadIcon from "../../icons/download-icon";
import EmailIcon from "../../icons/email-icon";
import GithubIcon from "../../icons/github-icon";
import LinkedinIcon from "../../icons/linkedin-icon";

const socials = [
  { href: "https://github.com/sabuj0338", label: "GitHub", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/sabuj0338/", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "mailto:sabuj0338@gmail.com", label: "Email", Icon: EmailIcon },
];

// Tags that float around the portrait; NestJS is the highlighted core skill.
const orbit = [
  { label: "go · fiber", className: "left-0 top-[70px] sm:-left-4", delay: "0s" },
  { label: "next.js", className: "right-0 top-[150px] sm:-right-3.5", delay: "-2s" },
  { label: "postgres", className: "left-0 top-[250px] sm:left-1.5", delay: "-4s" },
];

const stats = [
  { value: "6", suffix: "+", label: "Years experience" },
  { value: "65", suffix: "+", label: "Projects shipped" },
  { value: "85%", prefix: "−", label: "Server response time" },
  { value: "99.9", suffix: "%", label: "Uptime under peak load" },
];

const rise = "animate-rise motion-reduce:animate-none";

export default function About() {
  return (
    <section id="top" className="relative min-h-[920px] px-5 pb-24 pt-[170px]">
      <HeroBackground />

      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-14">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
          <div
            className={`${rise} inline-flex items-center gap-2.5 self-start rounded-full border border-primary/30 bg-primary/[0.06] py-[7px] pl-2.5 pr-3.5 font-mono text-xs text-muted`}
          >
            <span className="relative h-2 w-2">
              <span className="absolute inset-0 animate-ping-soft rounded-full bg-primary" />
              <span className="absolute inset-0 rounded-full bg-primary" />
            </span>
            Lead architect @ Workspace Infotech · open to senior roles
          </div>

          <p className={`${rise} font-mono text-sm tracking-wide text-primary [animation-delay:100ms]`}>
            Hi, I'm Sabuj Islam —
          </p>

          <h1
            className={`${rise} text-[clamp(44px,6.2vw,86px)] font-semibold leading-[0.98] tracking-[-0.045em] [animation-delay:180ms]`}
          >
            Senior full‑stack engineer building{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-primary">systems</span> that
            scale.
          </h1>

          <p className={`${rise} max-w-[580px] text-lg leading-relaxed text-muted [animation-delay:260ms]`}>
            6+ years designing microservices and high‑traffic platforms with NestJS, Next.js, Go and PostgreSQL —
            from robust backend architecture to the pipeline that ships it, for products used by millions.
          </p>

          <div className={`${rise} flex flex-wrap items-center gap-3 [animation-delay:340ms]`}>
            <a href="#work" className="btn-primary">
              View selected work
              <ArrowMoveRightIcon className="h-[18px] w-[18px]" />
            </a>
            <a href="resume.pdf" className="btn-ghost">
              <DownloadIcon className="h-[18px] w-[18px]" />
              Résumé
            </a>
            <div className="ml-1 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} className="icon-btn">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`${rise} relative flex min-w-0 flex-[1_1_380px] justify-center [animation-delay:300ms]`}>
          <div className="relative h-[470px] w-[360px] max-w-full">
            <svg aria-hidden="true" viewBox="0 0 360 360" className="absolute left-0 top-0 h-[360px] w-[360px] max-w-full animate-spin-slow">
              <circle cx="180" cy="180" r="172" fill="none" stroke="rgba(13,203,138,0.55)" strokeWidth="1.2" strokeDasharray="2 10" strokeLinecap="round" />
              <circle cx="180" cy="8" r="4" fill="#0dcb8a" />
            </svg>

            <div className="absolute left-[30px] top-[30px] h-[300px] w-[300px] overflow-hidden rounded-full border border-white/10 bg-surface">
              <img
                src="sabuj0338_2.webp"
                alt="Portrait of Sabuj Islam"
                width={300}
                height={300}
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>

            {orbit.map((tag) => (
              <span
                key={tag.label}
                style={{ animationDelay: tag.delay }}
                className={`absolute ${tag.className} animate-float rounded-[10px] border border-white/10 bg-[#0e1211]/90 px-3 py-2 font-mono text-xs text-fg-soft`}
              >
                {tag.label}
              </span>
            ))}
            <span
              style={{ animationDelay: "-3s" }}
              className="absolute right-0 top-[244px] flex sm:-right-1.5 animate-float items-center gap-2 rounded-[10px] border border-primary/55 bg-[#091410]/95 px-3 py-2 font-mono text-xs text-fg shadow-[0_10px_30px_-12px_rgba(13,203,138,0.5)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              nest.js<span className="text-primary">· core</span>
            </span>

            <div className="absolute inset-x-5 bottom-0 overflow-hidden rounded-[14px] border border-white/10 bg-[#090c0b]/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
              <WindowBar title="~/sabuj — zsh" />
              <div className="px-4 py-3.5 font-mono text-[12.5px] leading-[1.8] text-fg-soft">
                <p><span className="text-primary">❯</span> whoami</p>
                <p className="text-muted">senior full-stack · 6y+ · dhaka, BD</p>
                <p><span className="text-primary">❯</span> stack --core</p>
                <p className="whitespace-pre text-muted">nest  next  go  postgres  redis  k8s</p>
                <p>
                  <span className="text-primary">❯</span>{" "}
                  <span className="inline-block h-[15px] w-2 animate-blink bg-primary align-[-3px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dl
        className={`${rise} relative mx-auto mt-[72px] grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0a0d0c]/60 backdrop-blur [animation-delay:420ms]`}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse border-white/[0.06] px-7 py-[26px] [&:not(:last-child)]:border-r">
            <dt className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-dim">{stat.label}</dt>
            <dd className="text-[44px] font-semibold tracking-[-0.04em]">
              {stat.prefix && <span className="text-primary">{stat.prefix}</span>}
              {stat.value}
              {stat.suffix && <span className="text-primary">{stat.suffix}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
