"use client";

import Card from "@/components/card";
import AppShel from "@/components/layout/appshel";
import useAppStore from "@/store/app-store";
import { useShallow } from "zustand/react/shallow";
export default function Keranjang() {
  const [keranjang] = useAppStore(useShallow((state) => [state.keranjang]));

  const tampilDataConsole = () => {
    console.log({ keranjang });
  };

  return (
    <AppShel>
      <div className="w-full h-max flex flex-wrap justify-center items-center gap-4">
        {keranjang ? (
          keranjang.map((item, i) => (
            <Card key={i} name={item.name} url={item.url} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={tampilDataConsole}
      >
        Console Data
      </button>
    </AppShel>
  );
}
