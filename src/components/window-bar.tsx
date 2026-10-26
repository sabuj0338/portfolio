type Props = {
  title: string;
  size?: "sm" | "md";
};

// Title bar of a mock terminal / browser window.
export default function WindowBar({ title, size = "md" }: Props) {
  const dot = size === "sm" ? "h-[7px] w-[7px]" : "h-[9px] w-[9px]";

  return (
    <div className={`flex items-center gap-1.5 border-b border-white/[0.06] ${size === "sm" ? "px-2.5 py-2" : "px-3 py-2.5"}`}>
      <span className={`${dot} rounded-full bg-[#2a322f]`} />
      <span className={`${dot} rounded-full bg-[#2a322f]`} />
      <span className={`${dot} rounded-full bg-[#2a322f]`} />
      <span className={`ml-2 truncate font-mono text-dim ${size === "sm" ? "text-[10.5px]" : "text-[11px]"}`}>{title}</span>
    </div>
  );
}
