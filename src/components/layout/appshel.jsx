import Link from "next/link";

export default function AppShel({ children }) {
  return (
    <div className="w-full min-h-[100vh] max-h-max relative">
      <div className="w-full h-max fixed top-0 left-0 bg-gray-700">
        <div className="w-[95%] h-max m-auto p-3">
          <button className="py-1 px-3 bg-sky-400 rounded-md">
            <Link href={"/"}>Back</Link>
          </button>
        </div>
      </div>
      <div className="w-[90%] h-max mt-[80px] m-auto">{children}</div>
    </div>
  );
}
