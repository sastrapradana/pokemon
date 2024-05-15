import useAppStore from "@/store/app-store";
import Link from "next/link";
import { useShallow } from "zustand/react/shallow";
import { usePathname } from "next/navigation";

export default function Card({ name, url }) {
  const [keranjang, updateKeranjang, deleteItemKeranjang] = useAppStore(
    useShallow((state) => [
      state.keranjang,
      state.updateKeranjang,
      state.deleteItemKeranjang,
    ])
  );

  const pathname = usePathname();
  const handleChart = () => {
    const filterKeranjang = keranjang.filter((item) => item.name == name);
    if (filterKeranjang.length > 0) {
      alert("item sudah tersedia didalam keranjang");
      return;
    }
    updateKeranjang({ name, url });
  };

  const handleDelete = () => {
    deleteItemKeranjang(name);
  };

  return (
    <div className="w-[250px] h-max bg-gray-800 border border-gray-200 rounded-lg shadow flex p-2 items-center">
      <div className=" w-max h-max">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white capitalize">
            {name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5 gap-4">
          <Link href={`/detail/${name}`}>
            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
              Detail
            </button>
          </Link>
          {pathname == "/" ? (
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={handleChart}
            >
              Add to chart
            </button>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
