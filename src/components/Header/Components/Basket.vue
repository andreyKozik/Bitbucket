<template>
  <div class="basket" v-if="WINDOW_WIDTH > '1023'">
    <div class="counter">{{ amountGoods }}</div>
    <Icon class="icon" icon="basket" alt="basket" />
  </div>
  <div class="basket" v-else>
    <div class="counter768">{{ amountGoods }}</div>
    <Icon
      class="icon"
      icon="basket"
      alt="basket"
      :isHover="true"
      :isActive="true"
      :size="WINDOW_WIDTH > 767 ? '4.4vw' : '5.2vw'"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "Basket",
  components: {
    Icon
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: state => state.WINDOW_WIDTH,
      amountGoods: state => state.cartCounter
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.basket {
  width: 43px;
  display: flex;
  justify-content: space-between;
  font-family: "Exo-medium";
  @media (max-width: 1023px) {
    width: 67px;
  }
  @media (max-width: 768px) {
    width: 62px;
  }
  @media (max-width: 600px) {
    width: 50px;
  }
  .icon {
    margin: 0 2px 0 0;
  }
  .counter768 {
    font-size: 1.7em;
    @media (max-width: 600px) {
      font-size: 1.2em;
    }
  }
}
</style>
