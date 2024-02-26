import BackendIcon from "../../icons/backend-icon";
import CICDIcon from "../../icons/cicd-icon";
import SmartPhoneIcon from "../../icons/smartphone-icon";
import WebIcon from "../../icons/web-icon";

export default function Service() {
  return (
    <section className="py-10">
      <div className="">
        <p className="uppercase text-primary text-sm">Services</p>
        <h2 className="font-extrabold text-5xl">What I Do</h2>
      </div>

      <br />

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded">
          <WebIcon className="w-8 h-8 text-primary" />
          <h2 className="mt-3 uppercase text-sm">Web Development</h2>
          <p className="mt-1 text-xs text-gray-500 line-clamp-4">
            45+ industry standart project completed using modern technologies
            like Vue, React, Next JS, Tailwind, MUI, Ant Design and more.
          </p>
        </div>
        <div className="bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded">
          <BackendIcon className="w-8 h-8 text-primary" />
          <h2 className="mt-3 uppercase text-sm">Backend Development</h2>
          <p className="mt-1 text-xs text-gray-500 line-clamp-4">
            35+ existing projects and build from scratch. Managed high traffic.
            Mostly used PHP, Laravel, Express JS, Nest JS.
          </p>
        </div>
        <div className="bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded">
          <SmartPhoneIcon className="w-8 h-8 text-primary" />
          <h2 className="mt-3 uppercase text-sm">App Development</h2>
          <p className="mt-1 text-xs text-gray-500 line-clamp-4">
            15+ android and ios app development using flutter. Build from
            scratch design and development.
          </p>
        </div>
        <div className="bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 p-7 cursor-pointer hover:shadow rounded">
          <CICDIcon className="w-8 h-8 text-primary" />
          <h2 className="mt-3 uppercase text-sm">
            CI <span className="text-gray-500">/</span> CD
          </h2>
          <p className="mt-1 text-xs text-gray-500 line-clamp-4">
            Project deployment in live server using docker, custom deployment,
            and Published Android and IOS applications.
          </p>
        </div>
      </div>
    </section>
  );
}
