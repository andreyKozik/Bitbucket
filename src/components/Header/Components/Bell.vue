<template>
  <div class="bell">
    <Icon icon="bell" alt="bell" />
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "Bell",
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.bell {
  margin: 0 0 0 0;
}
</style>
