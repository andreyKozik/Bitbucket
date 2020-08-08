<template>
  <div
    class="product-tile"
    @mouseover="hoverLayer = true"
    @mouseleave="hoverLayer = false"
    v-if="(WINDOW_WIDTH > 1023 && !product.banner) || WINDOW_WIDTH < 1024"
  >
    <InnerWrapperBlock />
    <div class="baner-min" v-if="WINDOW_WIDTH < 1024 && product.banner">
      <img src="@/assets/img/baner/banner2.svg" alt="baner2 " />
    </div>
    <template v-else>
      <HoverProductTile
        :product="product"
        v-if="hoverLayer && WINDOW_WIDTH > 1023"
      />
      <div class="button" v-if="WINDOW_WIDTH < '1024'">
        <Icon
          icon="arrow-open"
          alt="star"
          size="2.5vw"
          :isHover="true"
          :isActive="true"
          class="arrow-open"
        />
      </div>
      <div class="header">
        <div class="header-name">
          <div class="name">{{ product.name }}</div>
          <div class="characteristic">{{ product.characteristic }}</div>
        </div>
        <img
          class="star-product"
          src="@/assets/img/icon/star-product.svg"
          alt="star-product"
          v-if="star"
        />
      </div>
      <div class="wrapper_main-img">
        <img
          v-if="srcMainimg()"
          class="main-img"
          :src="require(`@/assets/img/product_image/${srcMainimg()}`)"
          :alt="srcMainimg()"
        />
      </div>
      <div class="footer">
        <div class="price">{{ price }}</div>
        <div v-if="preOrder" class="pre-order">{{ checkPreOrder }}</div>
        <div v-else class="sale">{{ previousPrice }}</div>
        <div class="psu">{{ checkPsu() }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";

import InnerWrapperBlock from "@/components/InnerWrapperBlock";
import HoverProductTile from "./HoverProductTile.vue";
import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "ProductTile",
  props: {
    product: Object,
  },
  components: {
    InnerWrapperBlock,
    HoverProductTile,
    Icon,
  },
  data() {
    return {
      price: this.product.price,
      star: this.product.star,
      psu: this.product.psu,
      preOrder: this.product.preOrder,
      sale: this.product.sale,
      previousPrice: "",
      hoverLayer: false,
    };
  },
  computed: {
    checkPreOrder: function() {
      return this.preOrder ? "Pre-Order" : "";
    },
    ...mapState({
      WINDOW_WIDTH: (state) => state.WINDOW_WIDTH,
    }),
  },
  methods: {
    srcMainimg: function() {
      return this.product.img;
    },
    checkPsu: function() {
      return this.psu ? "PSU" : "";
    },
  },
  beforeMount() {
    if (this.sale) {
      this.previousPrice = this.price;
      this.price = this.sale;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.product-tile {
  position: relative;
  width: 213px;
  height: 213px;
  @media (max-width: 1023px) {
    width: 91.7vw;
    height: 91.7vw;
  }
  @media (max-width: 767px) {
    width: 92.4vw;
    height: 92.4vw;
  }
  margin-bottom: 30px;
  direction: ltr;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
  .baner-min {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 25;
    img {
      width: 70%;
      height: 70%;
    }
  }
  cursor: pointer;
  .button {
    position: absolute;
    width: 18vw;
    height: 100%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
      width: 13vw;
    }
    .arrow-open {
      margin-left: -3vw;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 14.5px 15px 0 15px;
    @media (max-width: 1023px) {
      margin: 14.5px 58px 0 58px;
    }
    @media (max-width: 767px) {
      margin: 14.5px 58px 0 28px;
    }
    .header-name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: "OpenSans-light";
      font-size: 12px;
      line-height: 15px;
      @media (max-width: 1023px) {
        font-size: 3vw;
        line-height: 20px;
      }
      @media (max-width: 767px) {
        font-size: 4vw;
      }
      color: #c4c4c4;
      .name {
        margin: -4px 0px 1px 1px;
        @media (max-width: 1023px) {
          margin: 43px 0px 11px -1px;
        }
        @media (max-width: 767px) {
          margin: 12px 0px 1px -1px;
        }
      }
    }
    .star-product {
      @media (max-width: 1023px) {
        margin: 47px 3px 0px 0px;
        width: 5.3vw;
      }
      @media (max-width: 767px) {
        margin: 16px -30px 0px 0px;
      }
    }
  }
  .wrapper_main-img {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    @media (max-width: 1023px) {
      height: 62vw;
    }
    @media (max-width: 767px) {
      height: 59vw;
    }
    img {
      @media (max-width: 1023px) {
        width: 46vw;
      }
      @media (max-width: 767px) {
        width: 42vw;
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    height: 46px;
    .price {
      font-family: "OpenSans-semiBold";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 48px;
      color: #ffffff;
      margin: -7px 0px 0px 17px;
      @media (max-width: 1023px) {
        font-size: 6vw;
        margin: 16px 0px 0px 58px;
      }
      @media (max-width: 767px) {
        margin: 7px 0px 0px 27px;
      }
    }
    .pre-order {
      font-family: "OpenSans-light";
      font-size: 10px;
      line-height: 15px;
      color: #c4c4c4;
      margin-left: 12px;
      margin: -7px 0px 0px 8px;
      @media (max-width: 1023px) {
        font-size: 3vw;
        margin: 20px 0px 0px 30px;
      }
      @media (max-width: 767px) {
        font-size: 3.5vw;
        margin: 8px 0px 0px 16px;
      }
    }
    .sale {
      font-family: "OpenSans-light";
      font-size: 13px;
      line-height: 48px;
      text-decoration-line: line-through;
      color: #c4c4c4;
      margin-left: 13px;
      margin: -6px 0px 0px 14px;
      @media (max-width: 1023px) {
        font-size: 4vw;
        margin: 20px 0px 0px 30px;
      }
      @media (max-width: 767px) {
        font-size: 4.5vw;
        margin: 7px 0px 0px 30px;
      }
    }
    .psu {
      position: absolute;
      right: 0;
      font-family: "OpenSans-light";
      font-size: 10px;
      line-height: 15px;
      color: #00a651;
      margin-right: 13px;
      margin: -10px 13px 0px 0px;
      @media (max-width: 1023px) {
        font-size: 3vw;
        margin: 16px 61px 0px 0px;
      }
      @media (max-width: 767px) {
        font-size: 3.7vw;
        margin: 12px 27px 0px 0px;
      }
    }
  }
}
</style>
