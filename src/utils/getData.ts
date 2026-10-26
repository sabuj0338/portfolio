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
    const res = await fetch(`${endpoint}/data.json`);
    if(!res.ok) throw new Error();
    const out = await res.json();
    return out;
  } catch (error) {
    return;
  }
}