"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useShallow } from "zustand/react/shallow";
import useAppStore from "@/store/app-store";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 1000);

  const [data, updateData, getData] = useAppStore(
    useShallow((state) => [state.data, state.updateData, state.getData])
  );

  const handleSearch = () => {
    const getData = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });

    if (getData) {
      updateData(getData);
    }

    console.log({ getData });
  };

  useEffect(() => {
    if (!data || !debouncedQuery) {
      getData();
    }
    if (debouncedQuery) {
      console.log("Fetch data with query:", debouncedQuery);
      handleSearch();
    }
  }, [debouncedQuery]);

  return (
    <div className="w-[40%]">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cari pokemon"
          required=""
        />
      </div>
    </div>
  );
};

export default SearchComponent;
