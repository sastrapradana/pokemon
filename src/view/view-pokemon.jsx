"use client";

import { useShallow } from "zustand/react/shallow";
import useAppStore from "@/store/app-store";
import Card from "@/components/card";
import Link from "next/link";
export default function ViewPokemon() {
  const [data, keranjang] = useAppStore(
    useShallow((state) => [state.data, state.keranjang])
  );

  return (
    <>
      <div className="w-[90%] h-max mt-4">
        <Link
          href={"/keranjang"}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Keranjang{" "}
          <span className="text-black font-semibold">{keranjang.length}</span>
        </Link>
      </div>
      <div className="w-full h-max mt-8 flex items-center gap-8 flex-wrap justify-center">
        {data ? (
          data.map((item, i) => (
            <Card key={i} name={item.name} url={item.url} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
