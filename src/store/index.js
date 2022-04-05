import { createStore } from "vuex";
import { api } from "@/services/api";

export default createStore({
  state: {
    cart: {
      products: [],
    },
  },
  getters: {
    getTotalPrice(state) {
      let tempTotal = 0;

      state.cart.products.map((row) => {
        tempTotal = tempTotal + row.price;
      });

      return tempTotal;
    },
    getTotalQtt(state) {
      let tempTotal = 0;

      state.cart.products.map((row) => {
        tempTotal = tempTotal + row.quantity;
      });

      return tempTotal;
    },
  },
  mutations: {
    addToCart(state, data) {
      state.cart.products = data.products;
    },
  },
  actions: {
    async getCart({ commit }) {
      const { data } = await api.get("/cart");

      commit("addToCart", data);
    },

    async addProduct({ commit }, { id, quantity, ...product }) {
      await api.patch(`cart/products/${id}`, {
        ...product,
        quantity: quantity + 1,
      });
    },

    async deleteProduct({ commit }, { id }) {
      await api.delete(`cart/products/${id}`);
    },
  },
  modules: {},
});
