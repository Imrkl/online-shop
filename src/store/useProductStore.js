import { create } from "zustand";

import {
  getProducts
} from "../services/productAPI";

const useProductStore = create((set) => ({
  products: [],
  total: 0,
  loading: false,

  fetchProducts: async (page) => {
    set({ loading: true });

    try {
      const data =
        await getProducts(
          12,
          page * 12
        );

      set({
        products: data.products,
        total: data.total,
        loading: false
      });
    } catch (error) {
      console.log(error);

      set({
        loading: false
      });
    }
  }
}));

export default useProductStore;