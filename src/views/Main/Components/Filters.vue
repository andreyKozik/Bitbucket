<template>
  <div class="filters">
    <div class="header">{{ lang.header }}</div>

    <div class="content">
      <Algorithm />
      <Coin />
      <Equipment />
      <Manufacturer />

      <Input class="input" :placeholder="lang.inputs.minPrice" />
      <Input class="input" :placeholder="lang.inputs.maxPrice" />
      <Input class="input" :placeholder="lang.inputs.search" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Input from "@/components/Input/Input.vue";
import Algorithm from "./Filters/Algorithm.vue";
import Coin from "./Filters/Coin.vue";
import Equipment from "./Filters/Equipment.vue";
import Manufacturer from "./Filters/Manufacturer.vue";

export default {
  name: "Filters",
  components: {
    Input,
    Coin,
    Algorithm,
    Equipment,
    Manufacturer
  },
  computed: {
    ...mapState({
      lang: state => state.lang.main.filters
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
@import "@/views/Main/main.scss";

.filters {
  position: relative;
  width: 212px;
  height: 628px;
  margin: 71px 0 0 91px;
  letter-spacing: -0.1 px;

  .header {
    @include main-block-header;
    margin: 0 0 0 1px;
  }

  .content {
    @include main-block-content;
    .input {
      margin-top: 15px;
      ::placeholder {
        text-transform: capitalize;
      }
    }
  }
}
</style>
