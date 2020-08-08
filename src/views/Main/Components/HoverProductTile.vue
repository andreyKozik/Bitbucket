<template>
  <div class="hover-product-tile">
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
    <div class="info">
      <div class="price">{{ price }}</div>
      <div v-if="preOrder" class="pre-order">{{ checkPreOrder }}</div>
      <div v-else class="sale">{{ previousPrice }}</div>
      <div class="psu">{{ checkPsu() }}</div>
    </div>
    <div class="characteristic">
      <ButtonDropDown
        class="dropdown"
        :isOpen="false"
        :text="'Hash rate: 11.5'"
      />
    </div>
    <div class="footer">
      <div class="details">{{details}}</div>
      <div class="radio" @click.capture="increaseСounter()">
        <InnerWrapperBlock />
        <div>{{addCart}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ButtonDropDown from "@/components/Button/ButtonDropDown.vue";
import InnerWrapperBlock from "@/components/InnerWrapperBlock";

export default {
  name: "HoverProductTile",
  props: {
    product: Object
  },
  components: {
    ButtonDropDown,
    InnerWrapperBlock
  },
  data() {
    return {
      price: this.product.price,
      star: this.product.star,
      psu: this.product.psu,
      preOrder: this.product.preOrder,
      sale: this.product.sale,
      previousPrice: ""
    };
  },
  computed: {
    checkPreOrder: function() {
      return this.preOrder ? "Pre-Order" : "";
    },
    ...mapState({
      cartCounter: state => state.cartCounter,
      addCart: state => state.lang.main.onSale.tile.addCart,
      details: state => state.lang.main.onSale.tile.details
    })
  },
  methods: {
    ...mapActions({
      increaseСounter: "changeCartCounter"
    }),
    srcMainimg: function() {
      return this.product.img;
    },
    checkPsu: function() {
      return this.psu ? "PSU" : "";
    }
  },
  beforeMount() {
    if (this.sale) {
      this.previousPrice = this.price;
      this.price = this.sale;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.hover-product-tile {
  position: absolute;
  width: 209px;
  height: 209px;
  z-index: 20;
  background-color: #0b0c23dc;
  margin: 2px 2px;
  margin-bottom: 30px;
  direction: ltr;
  cursor: pointer;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 13.5px 13px 42px 14px;
    .header-name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: "OpenSans-light";
      font-size: 12px;
      line-height: 15px;
      color: #c4c4c4;
      .name {
        margin: -4px 0px 1px 1px;
      }
    }
  }
  .info {
    display: flex;
    align-items: center;
    height: 39px;
    .price {
      font-family: "OpenSans-semiBold";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 48px;
      color: #ffffff;
      margin: -7px 0px 0px 17px;
    }
    .pre-order {
      font-family: "OpenSans-light";
      font-size: 10px;
      line-height: 15px;
      color: #c4c4c4;
      margin-left: 12px;
      margin: -7px 0px 0px 8px;
    }
    .sale {
      font-family: "OpenSans-light";
      font-size: 13px;
      line-height: 48px;
      text-decoration-line: line-through;
      color: #c4c4c4;
      margin-left: 13px;
      margin: -6px 0px 0px 14px;
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
    }
  }
  .characteristic {
    display: flex;
    justify-content: center;
    .dropdown {
      background-color: #0b0c23;
      width: 183px;
      height: 30px;
      font-family: "OpenSans-light";
      font-weight: 300;
      font-size: 12px;
      color: #ffffff;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-left: 13px;
    width: 183px;
    .details {
      width: 83px;
      height: 33px;
      background-color: #1b1b67;
      font-family: "OpenSans-light";
      font-weight: 300;
      font-size: 12px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .radio {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 83px;
      height: 33px;
      background-color: #0b0c23;
      font-family: "OpenSans-light";
      font-weight: 300;
      font-size: 12px;
      color: #ffffff;
    }
  }
}
</style>
