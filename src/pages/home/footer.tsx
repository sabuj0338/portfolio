import EmailIcon from "../../icons/email-icon";
import FacebookIcon from "../../icons/faceboo-icon";
import GithubIcon from "../../icons/github-icon";
import LinkedinIcon from "../../icons/linkedin-icon";
import LogoIcon from "../../icons/logo-icon";

export default function Footer() {
  return (
    <footer className="container mx-auto py-10">
        <div className="flex gap-3 justify-center">
          <LogoIcon/>
          <span className="uppercase text-white text-2xl font-bold">
            SABUJ ISLAM
          </span>
        </div>

        <br />

        <div className="my-3  flex justify-center gap-5">
          <a
            href="https://github.com/sabuj0338"
            className="w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
          >
            <GithubIcon className="w-6 h-6 text-primary"/>
          </a>
          <a
            href="https://www.linkedin.com/in/sabuj0338/"
            className="w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
          >
            <LinkedinIcon className="w-6 h-6 text-primary"/>
          </a>
          <a
            href="https://www.facebook.com/sabuj0338"
            className="w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
          >
            <FacebookIcon className="w-6 h-6 text-primary"/>
          </a>
          <a
            href="mailto: sabuj0338@gmail.com"
            className="w-16 h-16 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
          >
            <EmailIcon className="w-6 h-6 text-primary"/>
          </a>
        </div>

        <br />

        <div className="mt-4 flex justify-center">
          <p className="text-gray-400 text-sm">
            Developed By 🧑🏻‍💻{" "}
            <strong className="text-primary">
              <code>Sabuj Islam</code>
            </strong>
          </p>
        </div>
      </footer>
  )
}
