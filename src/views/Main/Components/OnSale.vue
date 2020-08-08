<template>
  <div class="on-sale">
    <div class="header">
      <span>{{ lang.header }}</span>
      <div class="display">
        <div class="change-display">
          <div class="view">{{ lang.view }}</div>
          <div class="name">{{ lang.grid }}</div>
        </div>
        <img
          class="combined"
          src="@/assets/img/icon/combined.svg"
          alt="combined"
        />
        <img
          src="@/assets/img/icon/delimeter-vertically.svg"
          alt="delimeter-vertically"
        />
      </div>
    </div>
    <div class="scroll"></div>
    <div class="products">
      <div class="wrapper_product-tile">
        <ProductTile v-for="(item, i) in products" :key="i" :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ProductTile from "./ProductTile";

export default {
  name: "OnSale",
  props: {},
  components: {
    ProductTile
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      products: state => state.products,
      lang: state => state.lang.main.onSale
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
@import "@/views/Main/main.scss";

.on-sale {
  width: 491px;
  height: 747px;
  user-select: none;
  margin: 71px 0 0 30px;
  letter-spacing: -0.1px;
  @media (max-width: 1439px) {
    max-width: 49.1vw;
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    span {
      @include main-block-header;
      margin-left: 35px;
    }
    .display {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: -3px -11px 0 0;
      @media (max-width: 1250px) {
        margin: -3px 35px 0 0;
      }
      .change-display {
        display: flex;
        justify-content: space-between;
        font-family: "Exo-regular";
        font-size: 10px;
        line-height: 48px;
        .view {
          color: #c4c4c4;
          margin-right: 7px;
        }
        .name {
          color: #ffffff;
        }
      }
      .combined {
        cursor: pointer;
        margin: 0 1.1vw 0 1vw;
      }
    }
  }
  .products {
    max-width: 461px;
    height: 699px;
    overflow-y: scroll;
    direction: rtl;
    padding-left: 30px;
    .wrapper_product-tile {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      direction: ltr;
      @media (max-width: 1439px) {
        flex-direction: column;
        flex-wrap: nowrap;
        max-width: 46.1vw;
        align-items: flex-start;
      }
    }
  }
  .scroll {
    position: absolute;
    width: 2px;
    height: 699px;
    background: #ffffff;
    opacity: 0.2;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-left: 2px;
    pointer-events: none;
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
