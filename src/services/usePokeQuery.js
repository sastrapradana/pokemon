import { useQuery } from "@tanstack/react-query";

async function getData() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  console.log({ res });

  return res.json();
}

export function useDataDoa() {
  return useQuery({
    queryKey: ["data-poke"],
    queryFn: getData,
    staleTime: 5 * 60 * 1000,
  });
}
