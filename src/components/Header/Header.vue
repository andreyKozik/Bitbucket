<template>
  <div class="main-header">
    <Header_1024_1440 @click="routerTo('/')" v-if="WINDOW_WIDTH > '1023'" />
    <Header_425_1023 @click="routerTo('/')" v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header_425_1023 from "./Components/Header425-1023.vue";
import Header_1024_1440 from "./Components/Header1024-1440.vue";

export default {
  name: "Header",
  props: {},
  components: {
    Header_425_1023,
    Header_1024_1440
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: state => state.WINDOW_WIDTH
    })
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  margin: 0 auto;
  width: 100%;
}
</style>
