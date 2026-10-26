import { useQuery } from "@tanstack/react-query";
import Reveal from "../../components/reveal";
import SectionHeading from "../../components/section-heading";
import getData from "../../utils/getData";

export default function Skills() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  const layers = query.data?.stack ?? [];
  const core = new Set(query.data?.core_stack ?? []);

  return (
    <section id="stack" className="relative px-5 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          index="04"
          label="Stack"
          title="The toolbox,"
          accent="by layer."
          description="Picked for the problem, not the hype. Highlighted tools are the ones I reach for first."
        />

        <Reveal className="mt-14">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.08]">
            {layers.map((layer, i) => (
              <div key={layer.name} className="flex flex-col gap-[18px] bg-deep p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-[17px] font-semibold tracking-tight">{layer.name}</h3>
                  <span className="font-mono text-[11px] text-dim">L{i + 1}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border px-3 py-[7px] text-[13.5px] transition-colors hover:border-primary/50 hover:bg-primary/[0.08] hover:text-fg ${
                        core.has(item) ? "border-primary/45 text-fg" : "border-white/10 text-fg-soft"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
