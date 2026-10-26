import ContactRadar from "../../components/backgrounds/contact-radar";
import Reveal from "../../components/reveal";
import WhatsAppIcon from "../../icons/whatsapp-icon";

const links = [
  { href: "https://www.linkedin.com/in/sabuj0338/", label: "LinkedIn" },
  { href: "https://github.com/sabuj0338", label: "GitHub" },
  { href: "resume.pdf", label: "Résumé (PDF)" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-10 pt-24">
      <Reveal className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] border border-primary/25 bg-[#0a0f0d] px-[clamp(24px,6vw,80px)] py-[clamp(40px,7vw,96px)]">
        <ContactRadar />

        <div className="relative flex max-w-[640px] flex-col gap-6">
          <p className="font-mono text-[13px] text-primary">05 / Contact</p>
          <h2 className="text-[clamp(40px,5.6vw,76px)] font-semibold leading-none tracking-[-0.045em]">
            Have something to build?{" "}
            <span className="font-serif font-normal italic tracking-normal text-primary">Let's talk.</span>
          </h2>
          <p className="max-w-[500px] text-[17px] leading-relaxed text-muted">
            Open to senior full‑stack and backend roles, technical leadership and select freelance projects. I usually
            reply within a day.
          </p>
          <a
            href="mailto:sabuj0338@gmail.com"
            className="self-start border-b border-primary/60 pb-1 text-[clamp(22px,3vw,34px)] font-medium tracking-tight text-fg transition-colors hover:border-primary hover:text-primary-soft"
          >
            sabuj0338@gmail.com
          </a>
          <div className="mt-2 flex flex-wrap gap-2.5">
            <a href="https://wa.me/8801775559622" className="btn-primary">
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              WhatsApp
            </a>
            {links.map((link) => (
              <a key={link.label} href={link.href} className="btn-ghost">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
