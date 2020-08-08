export default {
  setWindowWidth(state, value) {
    state.WINDOW_WIDTH = value;
  },
  setChangeLang(state, value) {
    state.lang = value;
  },
  setProducts(state, value) {
    state.products = value;
  },
  setCartCounter(state) {
    state.cartCounter++;
  }
};
