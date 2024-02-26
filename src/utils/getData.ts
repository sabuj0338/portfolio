
export default async function getData(): Promise<undefined | IDataResponse> {
  try {
    const res = await fetch("https://sabuj0338.github.io/portfolio/data.json");
    if(!res.ok) throw new Error();
    const out = await res.json();
    return out;
  } catch (error) {
    return;
  }
}