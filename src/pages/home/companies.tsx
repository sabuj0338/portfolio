import { useQuery } from "@tanstack/react-query";
import getData from "../../utils/getData";

export default function Companies() {
  const query = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return (
    <section className="py-10">
      <div className="">
        <p className="uppercase text-primary text-sm">Companies I Worked For</p>
      </div>

      <br />
      <br />

      <div className="flex flex-wrap justify-between gap-5">
        {query.data &&
          query.data?.companies?.map((company: ICompany) => (
            <a
              href={company?.link}
              target="blank"
              className="w-36"
              key={company?.link}
            >
              <img className="h-10 w-auto" loading="lazy" src={company?.image} alt={company?.name} />
            </a>
          ))}
      </div>
    </section>
  );
}
