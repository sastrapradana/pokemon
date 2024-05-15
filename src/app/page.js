import SearchComponent from "@/components/seacrh";
import ViewPokemon from "@/view/view-pokemon";

export default async function Home() {
  return (
    <div className="w-full min-h-max max-h-max">
      <div className="w-[90%] h-max m-auto flex flex-col items-center ">
        <h1 className="text-[3rem] font-bold mt-4">Pokemon</h1>
        <div className="w-full h-max mt-4 flex items-center justify-center gap-6">
          <SearchComponent />
        </div>
        <ViewPokemon />
      </div>
    </div>
  );
}
