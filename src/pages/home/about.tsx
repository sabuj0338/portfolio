import ArrowMoveRightIcon from "../../icons/arrow-move-right-icon";
import EmailIcon from "../../icons/email-icon";
import FacebookIcon from "../../icons/faceboo-icon";
import GithubIcon from "../../icons/github-icon";
import LinkedinIcon from "../../icons/linkedin-icon";
import WaveHandIcon from "../../icons/wave-hand-icon";

export default function About() {
  return (
    <section id="about" className="py-0 sm:py-10 mt-0 sm:mt-4">
      <br />
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="mt-5 flex items-center gap-2 ">
            <h3 className="text-white text-3xl font-bold">Hi, I'm Sabuj</h3>
            <WaveHandIcon/>
          </div>
          <div className="mt-2">
            <h4 className="text-3xl text-gray-400">
              Full-Stack Software Developer
            </h4>
          </div>
          {/* <!-- I started my career as a backend developer 2019. Thoughout my career, I learned and worked with different technologies, many existing projects.  --> */}
          <p className="mt-7 text-gray-500">
            From my childhood, I dreamed about being a software engineer. I
            dreamed about doing something amazing and I am continuing my hard
            work to fulfill my dream {":)"}
          </p>

          <div className="mt-12">
            <p className="uppercase text-gray-300">Find Me On</p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://github.com/sabuj0338"
                className="w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
              >
                <GithubIcon className="w-6 h-6 text-primary"/>
              </a>
              <a
                href="https://www.linkedin.com/in/sabuj0338/"
                className="w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
              >
                <LinkedinIcon className="w-6 h-6 text-primary"/>
              </a>
              <a
                href="https://www.facebook.com/sabuj0338"
                className="w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
              >
                <FacebookIcon className="w-6 h-6 text-primary"/>
              </a>
              <a
                href="mailto: sabuj0338@gmail.com"
                className="w-14 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm"
              >
                <EmailIcon className="w-6 h-6 text-primary"/>
              </a>
              <a
                href="resume.pdf"
                className="px-4 h-14 bg-slate-500 bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center gap-2 font-semibold text-xs shadow rounded-sm border border-gray-800 hover:border-primary hover:text-primary group"
              >
                <span>Resume</span>
                <ArrowMoveRightIcon/>
              </a>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap gap-10">
            <div className="flex flex-col">
              <h2 className="text-4xl text-gray-300">5+</h2>
              <p className="mt-2 uppercase text-gray-500 text-sm">
                Years of experience
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl text-gray-300">4+</h2>
              <p className="mt-2 uppercase text-gray-500 text-sm">
                Working Company
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl text-gray-300">65+</h2>
              <p className="mt-2 uppercase text-gray-500 text-sm">Projects</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <div className="w-full h-full flex items-center justify-center">
            <img
              className="w-52 h-full object-cover bg-white rounded-full border-b-4 border-t-8 border-double border-green-500"
              src="sabuj0338_2.webp"
              alt="sabuj islam"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
