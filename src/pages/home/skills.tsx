import { useQuery } from "@tanstack/react-query";
import getData from "../../utils/getData";

export default function Skills() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <section id="skills" className="py-10">
      <div className="">
        <p className="uppercase text-primary text-sm">Skills</p>
      </div>

      <br />

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {query.data &&
          query.data?.skills?.map((skill: ISkill, index: number) => (
            <SkillCard key={index} skill={skill} />
          ))}
      </div>
    </section>
  );
}

interface ISkillCard {
  skill?: ISkill;
}

export function SkillCard({ skill }: ISkillCard) {
  return (
    <div className="w-40 h-40 flex flex-col items-center justify-center bg-[#171819] hover:bg-primary hover:bg-opacity-20 hover:shadow-lg p-5 rounded">
      <img className="w-auto h-16" src={skill?.icon_url} alt={skill?.name} />
      <p className="mt-2 text-sm">{skill?.name}</p>
    </div>
  );
}
