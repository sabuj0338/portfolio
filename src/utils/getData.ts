/**
 * This TypeScript function asynchronously fetches data from a specified API endpoint and returns the
 * parsed JSON response or undefined in case of an error.
 * @returns The function `getData` returns a Promise that resolves to either `undefined` or an object
 * of type `IDataResponse`.
 */

export default async function getData(): Promise<undefined | IDataResponse> {
  try {
    const endpoint =
      import.meta.env.VITE_API_ENDPOINT ||
      import.meta.env.BASE_URL.replace(/\/$/, "");
    // no-cache: revalidate every load so a deploy never pairs new code with a stale data.json
    const res = await fetch(`${endpoint}/data.json`, { cache: "no-cache" });
    if(!res.ok) throw new Error();
    return normalize(await res.json());
  } catch (error) {
    return;
  }
}

const list = <T>(value: T[] | undefined): T[] => (Array.isArray(value) ? value : []);

// Fill in missing fields so a data.json from an older schema degrades instead of crashing a render.
function normalize(raw: Partial<IDataResponse>): IDataResponse {
  return {
    projects: list(raw.projects).map((p) => ({
      ...p,
      images: list(p.images),
      technologies: list(p.technologies),
      categories: list(p.categories),
      label: p.label ?? "",
      host: p.host ?? "",
      preview: p.preview && list(p.preview),
    })),
    experience: list(raw.experience).map((job) => ({
      ...job,
      highlights: list(job.highlights),
      metrics: list(job.metrics),
    })),
    education: raw.education,
    stack: list(raw.stack).map((layer) => ({ ...layer, items: list(layer.items) })),
    core_stack: list(raw.core_stack),
    companies: list(raw.companies),
  };
}