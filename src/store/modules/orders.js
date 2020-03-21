export default {
  state: {
    orders: [],
  },
  getters: {
    getOrders: (state) => state.orders,
  },
  mutations: {
    ADD_ORDER(state, payload) {
      state.orders.push(payload);
    },
  },
};