<template>
  <div class="controls">
    <Icon
      icon="controls"
      alt="controls"
      :isHover="true"
      :isActive="true"
      :size="WINDOW_WIDTH > 767 ? '4.2vw' : '5.2vw'"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "Controls",
  components: {
    Icon
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: state => state.WINDOW_WIDTH
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.controls {
  margin: 0 0 0 0;
}
</style>
