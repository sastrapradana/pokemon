"use client";

import { useShallow } from "zustand/react/shallow";
import useAppStore from "@/store/app-store";
import Link from "next/link";
export default function Card() {
  const [data] = useAppStore(useShallow((state) => [state.data]));

  return (
    <div className="w-full h-max mt-8 flex items-center gap-8 flex-wrap justify-center">
      {data
        ? data.map((item, i) => (
            <div
              className="w-[250px] h-max bg-gray-800 border border-gray-200 rounded-lg shadow flex p-2 items-center"
              key={i}
            >
              {/* <a href="#">
            <img className="p-8 rounded-t-lg" src="" alt=" image" />
          </a> */}
              <div className=" w-max h-max">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5 gap-4">
                  <Link href={`/detail/${item.name}`}>
                    <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
                      Detail
                    </button>
                  </Link>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                    Add to chart
                  </button>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
