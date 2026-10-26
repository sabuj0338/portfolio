import LogoIcon from "../../icons/logo-icon";

const links = [
  { href: "https://www.facebook.com/sabuj0338", label: "Facebook" },
  { href: "https://www.npmjs.com/package/@sabuj0338/axios-friday", label: "npm" },
  { href: "#top", label: "Back to top ↑" },
];

export default function Footer() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-7 text-[13.5px] text-dim">
      <div className="flex items-center gap-2.5">
        <LogoIcon className="h-7 w-7" />
        <span>© {new Date().getFullYear()} Sabuj Islam · Dhaka, Bangladesh</span>
      </div>
      <div className="flex items-center gap-5 font-mono text-xs">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="text-muted transition-colors hover:text-fg">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
