import ArrowUpRightIcon from "../../icons/arrow-up-right-icon";
import LogoIcon from "../../icons/logo-icon";

const links = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function AppBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-5 py-4">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-[1200px] items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#0a0d0c]/70 py-2.5 pl-4 pr-2.5 backdrop-blur-xl"
      >
        <a href="#top" aria-label="Sabuj Islam — home" className="flex items-center gap-2.5 text-fg">
          <LogoIcon className="h-8 w-8" />
          <span className="text-[15px] font-semibold tracking-tight">Sabuj Islam</span>
        </a>

        <div className="hidden items-center gap-7 text-sm md:flex">
          {links.map((link, i) => (
            <a key={link.href} href={link.href} className="text-muted transition-colors hover:text-fg">
              <span className="mr-1.5 font-mono text-[11px] text-primary">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-primary min-h-[44px] rounded-[10px] px-[18px] text-sm">
          Let's talk
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}
