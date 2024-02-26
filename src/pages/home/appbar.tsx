import LogoIcon from "../../icons/logo-icon";
import WhatsAppIcon from "../../icons/whatsapp-icon";

export default function AppBar() {
  return (
    <nav className="sticky top-0 bg-[#0e0e0e] z-30">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between py-5">
          <div className="">
            <LogoIcon/>
          </div>
          <div className="flex items-center gap-10">
            <a
              href="#about"
              className="text-gray-400 uppercase text-base font-medium hidden md:block"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-400 uppercase text-base font-medium hidden md:block"
            >
              What I Do
            </a>
            <a
              href="#projects"
              className="text-gray-400 uppercase text-base font-medium hidden md:block"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-400 uppercase text-base font-medium hidden md:block"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-400 uppercase text-base font-medium hidden md:block"
            >
              Contact
            </a>
            <a
              href="whatsapp://send?phone=+8801775559622"
              className="text-primary uppercase text-base font-medium border border-primary rounded-full px-1.5 py-1.5 shadow-[0_0_1px,inset_0_0_0px,0_0_1px,0_0_1px,0_0_10px] hover:shadow-[0_0_1px,inset_0_0_0px,0_0_1px,0_0_1px,0_0_15px] shadow-primary"
            >
              <WhatsAppIcon className="text-primary w-4 h-4"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
