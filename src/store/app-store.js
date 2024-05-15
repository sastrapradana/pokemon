import { create } from "zustand";

const useAppStore = create((set) => ({
  data: undefined,
  updateData: (datas) => set({ data: datas }),
  getData: async () => {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const { results } = await res.json();
      set({ data: results });
    } catch (error) {
      console.log(error);
    }
  },

  keranjang: [],
  updateKeranjang: (data) =>
    set((state) => ({ keranjang: [...state.keranjang, data] })),
  deleteItemKeranjang: (name) =>
    set((state) => ({
      keranjang: state.keranjang.filter((item) => item.name !== name),
    })),
}));

export default useAppStore;
