<template>
  <div class="main">
    <ProductTile v-for="(item, i) in products" :key="i" :product="item" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import ProductTile from "./ProductTile";

export default {
  name: "Main",
  props: {},
  components: {
    ProductTile
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.main {
  background-color: $background;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10.8vw;
  @media (max-width: 767px) {
    margin-top: 13.8vw;
  }
}
</style>
