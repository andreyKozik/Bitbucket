<template>
  <div class="new-listings">
    <div class="header">
      <span>{{ lang.header }}</span>
    </div>
    <div class="scroll"></div>
    <div class="products">
      <div class="wrapper_product-tile">
        <ProductTile
          v-for="(item, i) in newProducts"
          :key="i"
          :product="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ProductTile from "./ProductTile";

export default {
  name: "NewListings",
  props: {},
  components: {
    ProductTile
  },
  computed: {
    ...mapState({
      newProducts: state => state.newProducts,
      lang: state => state.lang.main.newListings
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
@import "@/views/Main/main.scss";

.new-listings {
  width: 248px;
  height: 747px;
  user-select: none;
  margin: 70px 0px 0 40px;
  letter-spacing: 0.4px;
  word-spacing: -2.8px;
  @media (max-width: 1250px) {
    display: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    span {
      @include main-block-header;
      margin-left: 36px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .products {
    width: 248px;
    height: 699px;
    overflow-y: scroll;
    direction: rtl;
    padding-left: 30px;
    .wrapper_product-tile {
      display: flex;
      flex-direction: column;
      direction: ltr;
    }
  }
  .scroll {
    position: absolute;
    width: 1px;
    height: 699px;
    background: #ffffff;
    opacity: 0.2;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    pointer-events: none;
    margin-left: 2px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff;
  }
}
</style>
