<template>
  <div class="main">
    <Filters />
    <OnSale />
    <NewListings />
    <News />
  </div>
</template>

<script>
import {} from "vuex";

import Filters from "./Filters.vue";
import NewListings from "./NewListings.vue";
import News from "./News.vue";
import OnSale from "./OnSale.vue";

export default {
  name: "Main",
  props: {},
  components: {
    Filters,
    NewListings,
    News,
    OnSale
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.main {
  background-color: $background;
  width: 1440px;
  @media (max-width: 1439px) {
    max-width: 100vw;
  }
  height: 910px;
  display: flex;
}
</style>
