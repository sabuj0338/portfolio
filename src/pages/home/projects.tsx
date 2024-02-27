import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PhotoGallerySlider from "../../components/photo-gallery-slider";
import getData from "../../utils/getData";

export default function Projects() {
  const [tab, setTab] = useState<"frontend" | "backend" | "app">("frontend");

  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <section className="py-10">
      <div className="">
        <p className="uppercase text-primary text-sm">Projects</p>
        <h2 className="text-gray-200 italic text-xs">
          Every great project begin with an even better story.
        </h2>
      </div>

      <br />
      <div className="flex gap-5">
        <button
          onClick={() => setTab("frontend")}
          className={
            tab == "frontend"
              ? "rounded-sm px-4 py-2 text-black bg-primary uppercase transition delay-100"
              : "rounded-sm px-4 py-2 border border-gray-500 hover:border-primary text-gray-500 hover:text-primary uppercase transition delay-100"
          }
        >
          Frontend
        </button>
        <button
          onClick={() => setTab("backend")}
          className={
            tab == "backend"
              ? "rounded-sm px-4 py-2 text-black bg-primary uppercase transition delay-100"
              : "rounded-sm px-4 py-2 border border-gray-500 hover:border-primary text-gray-500 hover:text-primary uppercase transition delay-100"
          }
        >
          Backend
        </button>
        <button
          onClick={() => setTab("app")}
          className={
            tab == "app"
              ? "rounded-sm px-4 py-2 text-black bg-primary uppercase transition delay-100"
              : "rounded-sm px-4 py-2 border border-gray-500 hover:border-primary text-gray-500 hover:text-primary uppercase transition delay-100"
          }
        >
          App
        </button>
      </div>

      {query.isLoading && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array(4)
            .fill(1)
            .map((project: IProject, index: number) => (
              <ProjectCard key={`${project?.type}${index}`} />
            ))}
        </div>
      )}

      <div
        style={{ display: tab == "frontend" ? "" : "none" }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {query.data &&
          query.data?.projects
            ?.filter((it) => it?.type == "frontend")
            ?.map((project: IProject, index: number) => (
              <ProjectCard key={`${project?.type}${index}`} project={project} />
            ))}
      </div>
      <div
        style={{ display: tab == "backend" ? "" : "none" }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {query.data &&
          query.data?.projects
            ?.filter((it) => it?.type == "backend")
            ?.map((project: IProject, index: number) => (
              <ProjectCard key={`${project?.type}${index}`} project={project} />
            ))}
      </div>
      <div
        style={{ display: tab == "app" ? "" : "none" }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {query.data &&
          query.data?.projects
            ?.filter((it) => it?.type == "app")
            ?.map((project: IProject, index: number) => (
              <ProjectCard key={`${project?.type}${index}`} project={project} />
            ))}
      </div>
    </section>
  );
}

interface IProductCard {
  project?: IProject;
}

export function ProjectCard({ project }: IProductCard) {
  return project ? (
    <div className="bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 cursor-pointer hover:shadow rounded">
      {/* <PhotoGallerySlider arrow={project?.images?.length > 1}> */}
      <PhotoGallerySlider>
        {project?.images?.map((image) => (
          <div key={image} style={{ backgroundImage: `url(${image})` }}>
            <img
              className={`aspect-[16/9] rounded-t object-contain backdrop-blur`}
              src={image}
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </PhotoGallerySlider>

      <div className="p-5">
        <h2 className="uppercase text-sm">{project?.title}</h2>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
          {project?.short_description}
        </p>
        <div className="mt-5 w-full flex gap-3">
          <div className="w-full flex flex-wrap items-center gap-x-2 gap-y-1">
            {project?.technologies?.map((tech) => (
              <div
                key={tech?.toString()?.replace(" ", "_")}
                className="rounded-sm px-1 py-0.5 bg-slate-500 bg-opacity-30 text-gray-400 text-[9px]"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="">
            <a
              href={project?.live_url ?? "#"}
              target="blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-500 bg-opacity-30 hover:bg-opacity-20 hover:shadow-md"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="animate-pulse bg-slate-500 bg-opacity-10 rounded">
      <div className="rounded-t bg-slate-500 bg-opacity-30 aspect-[16/9] w-full"></div>
      <div className="p-5">
        <div className="flex gap-3">
          <div className="rounded-full bg-slate-500 bg-opacity-30 h-2 w-full"></div>
          <div className="rounded-full bg-slate-500 bg-opacity-30 h-2 w-32"></div>
        </div>
        <div className="flex gap-3 mt-1">
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-full"></div>
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-16"></div>
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-16"></div>
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-32"></div>
        </div>
        <div className="flex gap-3">
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-16"></div>
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-full"></div>
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-32"></div>
          <div className="mt-2 rounded-full bg-slate-500 bg-opacity-30 h-1.5 w-16"></div>
        </div>
        <br />
        <div className="flex">
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            <div className="rounded-sm bg-slate-500 bg-opacity-30 h-4 w-16"></div>
            <div className="rounded-sm bg-slate-500 bg-opacity-30 h-4 w-12"></div>
            <div className="rounded-sm bg-slate-500 bg-opacity-30 h-4 w-8"></div>
            <div className="rounded-sm bg-slate-500 bg-opacity-30 h-4 w-14"></div>
            <div className="rounded-sm bg-slate-500 bg-opacity-30 h-4 w-14"></div>
            <div className="rounded-sm bg-slate-500 bg-opacity-30 h-4 w-16"></div>
          </div>
          <div className="">
            <div className="rounded-full bg-slate-500 bg-opacity-30 h-8 w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
