<template>
  <div class="balance">
    <Icon icon="balance" alt="balance" />
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "Balance",
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.balance {
  margin: 2px 0px 0 3px;
}
</style>
