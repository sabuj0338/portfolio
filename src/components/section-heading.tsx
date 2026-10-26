import Reveal from "./reveal";

type Props = {
  index: string;
  label: string;
  title: string;
  accent: string; // rendered in the serif italic after the title
  description?: string;
};

export default function SectionHeading({ index, label, title, accent, description }: Props) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex flex-col gap-3.5">
        <p className="font-mono text-[13px] text-primary">
          {index} / {label}
        </p>
        <h2 className="text-[clamp(36px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.04em]">
          {title}{" "}
          <span className="font-serif font-normal italic tracking-normal text-muted">{accent}</span>
        </h2>
      </div>
      {description && <p className="max-w-[380px] text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
