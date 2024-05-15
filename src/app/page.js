import Card from "@/components/card";
import SearchComponent from "@/components/seacrh";

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

export default async function Home() {
  const { results } = await getData();

  return (
    <div className="w-full min-h-max max-h-max">
      <div className="w-[90%] h-max m-auto flex flex-col items-center">
        <h1 className="text-[3rem] font-bold mt-4">Pokemon</h1>
        <div className="w-full h-max mt-4 flex items-center justify-center gap-6">
          <SearchComponent />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Keranjang <span className="text-black font-semibold">2</span>
          </button>
        </div>
        <Card />
      </div>
    </div>
  );
}
