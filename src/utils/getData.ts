
export default async function getData(): Promise<undefined | IDataResponse> {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/data.json`);
    if(!res.ok) throw new Error();
    const out = await res.json();
    return out;
  } catch (error) {
    return;
  }
}