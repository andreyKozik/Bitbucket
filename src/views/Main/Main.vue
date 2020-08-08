<template>
  <div class="main">
    <Main_1024_1440 @click="routerTo('/')" v-if="WINDOW_WIDTH > '1023'" />
    <Main_425_1023 @click="routerTo('/')" v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Main_425_1023 from "./Components/Main425-1023.vue";
import Main_1024_1440 from "./Components/Main1024-1440.vue";

export default {
  name: "Main",
  props: {},
  components: {
    Main_1024_1440,
    Main_425_1023
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: state => state.WINDOW_WIDTH
    })
  }
};
</script>

<style lang="scss" scoped></style>
