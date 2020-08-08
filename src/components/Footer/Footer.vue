<template>
  <div class="footer">
    <Review />
    <SocialNetworks />
    <Achievements />
  </div>
</template>

<script>
import Review from "./components/Review";
import SocialNetworks from "./components/SocialNetworks";
import Achievements from "./components/Achievements";

export default {
  name: "Header",
  components: {
    Review,
    SocialNetworks,
    Achievements
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.footer {
  width: 1440px;
  @media (max-width: 1439px) {
    max-width: 100%;
  }
  @media (max-width: 1023px) {
    display: none;
  }
  z-index: 14;
  height: 82px;
  background-color: $background;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
