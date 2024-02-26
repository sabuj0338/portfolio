
export default async function getData(): Promise<undefined | IDataResponse> {
  try {
    const res = await fetch("http://localhost:5173/portfolio/data.json");
    if(!res.ok) throw new Error();
    const out = await res.json();
    return out;
  } catch (error) {
    return;
  }
}