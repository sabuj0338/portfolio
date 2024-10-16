import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getData from "../../utils/getData";

export default function Skills() {
  const [tab, setTab] = useState<"tech" | "tool">("tech");

  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <>
      <div className="">
        <p className="uppercase text-primary text-sm">Skills</p>
      </div>

      <br />
      <div className="flex gap-5">
        <button
          onClick={() => setTab("tech")}
          className={
            tab == "tech"
              ? "rounded-sm px-4 py-2 text-black bg-primary uppercase transition delay-100"
              : "rounded-sm px-4 py-2 border border-gray-500 hover:border-primary text-gray-500 hover:text-primary uppercase transition delay-100"
          }
        >
          Technology
        </button>
        <button
          onClick={() => setTab("tool")}
          className={
            tab == "tool"
              ? "rounded-sm px-4 py-2 text-black bg-primary uppercase transition delay-100"
              : "rounded-sm px-4 py-2 border border-gray-500 hover:border-primary text-gray-500 hover:text-primary uppercase transition delay-100"
          }
        >
          Tools
        </button>
      </div>

      {query.isLoading && (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {Array(6)
            .fill(1)
            ?.map((_, index: number) => (
              <SkillCard key={index} />
            ))}
        </div>
      )}

      <div
        style={{ display: tab == "tech" ? "" : "none" }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
      >
        {query.data &&
          query.data?.skills
            ?.filter((it) => it?.type == "tech")
            ?.map((skill: ISkill, index: number) => (
              <SkillCard key={`${skill?.type}${index}`} skill={skill} />
            ))}
      </div>

      <div
        style={{ display: tab == "tool" ? "" : "none" }}
        className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
      >
        {query.data &&
          query.data?.skills
            ?.filter((it) => it?.type == "tool")
            ?.map((skill: ISkill, index: number) => (
              <SkillCard key={`${skill?.type}${index}`} skill={skill} />
            ))}
      </div>
    </>
  );
}

interface ISkillCard {
  skill?: ISkill;
}

export function SkillCard({ skill }: ISkillCard) {
  return skill ? (
    <div className="w-40 h-40 flex flex-col items-center justify-center bg-[#171819] hover:bg-primary hover:bg-opacity-20 hover:shadow-lg p-5 rounded">
      <img className="w-auto h-16" src={skill?.icon_url} alt={skill?.name} />
      <p className="mt-3 text-sm text-gray-400">{skill?.name}</p>
    </div>
  ) : (
    <div className="animate-pulse w-40 h-40 flex flex-col items-center justify-center bg-[#171819] p-5 rounded">
      <div className="rounded-full bg-gray-800 h-16 w-16"></div>
      <div className="mt-3 rounded-full bg-gray-800 h-2 w-16"></div>
    </div>
  );
}
