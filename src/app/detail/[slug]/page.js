import AppShel from "@/components/layout/appshel";
import Image from "next/image";
import Link from "next/link";
async function getPokemonData(slug) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  const { slug } = params;
  const pokemonData = await getPokemonData(slug);

  console.log({ pokemonData });

  return (
    <AppShel>
      <div className="w-full h-[80vh] m-auto flex justify-center items-center gap-4">
        <div className="w-max h-max text-center flex flex-col justify-center items-center">
          <img
            src={pokemonData.sprites.back_default}
            alt="pokemon_image"
            className="w-[300px] h-[300px] object-cover border rounded-full"
          />
        </div>
        <div className="w-max h-[200px] flex flex-col gap-3 text-[1.5rem]">
          <h1>
            Name:{" "}
            <span className="text-red-500  text-[1.5rem] capitalize font-semibold">
              {slug}
            </span>
          </h1>
          <div className="flex items-center gap-3">
            <p>Type : </p>
            {pokemonData.types.map((type) => (
              <button
                className={`px-4 rounded-md capitalize ${
                  type.type.name == "fire"
                    ? "bg-orange-300 "
                    : type.type.name == "poison"
                    ? "bg-sky-300"
                    : type.type.name == "water"
                    ? "bg-blue-400"
                    : "bg-green-300"
                } `}
              >
                {type.type.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppShel>
  );
}
