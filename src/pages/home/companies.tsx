import { useQuery } from "@tanstack/react-query";
import getData from "../../utils/getData";

export default function Companies() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  const companies = query.data?.companies ?? [];

  return (
    <section aria-label="Companies I've worked with" className="pb-[88px] pt-6">
      <p className="text-center font-mono text-xs uppercase tracking-[0.12em] text-dim">Engineering for teams at</p>

      <div className="group mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        {/* Rendered twice so translateX(-50%) loops seamlessly */}
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[...companies, ...companies].map((company, i) => (
            <a
              key={`${company.name}${i}`}
              href={company.link}
              aria-hidden={i >= companies.length}
              tabIndex={i >= companies.length ? -1 : undefined}
              className="flex items-center gap-[72px] whitespace-nowrap pr-[72px] text-[28px] font-semibold tracking-[-0.03em] text-faint transition-colors hover:text-fg"
            >
              {company.name}
              <span aria-hidden="true" className="text-base text-primary">
                ✦
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
