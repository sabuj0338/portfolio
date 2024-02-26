import { useQuery } from "@tanstack/react-query";
import getData from "../../utils/getData";

export default function Projects() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <section id="projects" className="py-10">
      <div className="">
        <p className="uppercase text-primary text-sm">Projects</p>
        <h2 className="text-gray-200 italic text-xs">
          Every great project begin with an even better story.
        </h2>
      </div>

      <br />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {query.data &&
          query.data?.projects?.map((project: IProject, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </section>
  );
}

interface IProductCard {
  project?: IProject;
}

export function ProjectCard({ project }: IProductCard) {
  return (
    <div className="bg-slate-500 hover:bg-[#171819] bg-opacity-10 hover:bg-opacity-100 cursor-pointer hover:shadow rounded">
      <img className="aspect-[16/9] rounded-t" src={project?.image} alt="" />

      <div className="p-5">
        <h2 className="uppercase text-sm">{project?.title}</h2>
        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
          {project?.short_description}
        </p>
        <div className="mt-5 w-full flex items-center gap-3">
          <div className="w-full flex flex-wrap items-center gap-x-2 gap-y-1">
            {project?.technologies?.map((tech) => (
              <div
                key={tech?.toString()?.replace(" ", "_")}
                className="rounded-sm px-1 py-0.5 bg-slate-500 bg-opacity-30 text-[8px]"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="">
            <a
              href={project?.live_url ?? "#"}
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
  );
}
