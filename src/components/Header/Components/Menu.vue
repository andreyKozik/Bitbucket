<template>
  <div class="menu">
    <div class="close" @click.capture="routerTo('/')">
      <Icon
        icon="hamburger-close"
        alt="hamburger-close"
        size="14px"
        :isHover="true"
      />
    </div>
    <div class="buttons">
      <div class="name home" @click="routerTo('/')">{{ lang.home }}</div>

      <div class="dots">...</div>

      <div class="name" @click="routerTo('/sell')">{{ lang.sell }}</div>

      <div class="dots">...</div>

      <div class="name" @click="routerTo('/host')">{{ lang.host }}</div>

      <div class="dots">...</div>

      <div class="name" @click="routerTo('/about')">{{ lang.about }}</div>

      <div class="dots">...</div>

      <div class="name" @click="routerTo('/support')">{{ lang.support }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Icon from "@/components/Icon/Icon.vue";

export default {
  name: "Menu",
  props: {
    msg: String
  },
  components: {
    Icon
  },
  computed: {
    ...mapState({
      lang: state => state.lang.routes
    })
  },
  methods: {
    routerTo(link) {
      this.$router.push({ path: link });
      this.$emit("close");
    },
    ...mapActions({
      changeLang: "changeLang"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.menu {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  height: 1080px;
  position: absolute;
  z-index: 15;
  background: $background;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.98;
  .close {
    margin: 104px auto 0 auto;
  }
  .buttons {
    color: $white;
    margin-top: 109px;
    height: 638px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .name {
      color: $white;
      text-decoration: none;
      cursor: pointer;
      text-transform: uppercase;
      font-family: "Exo-regular";
      font-weight: 500;
      font-size: 30px;
      line-height: 48px;
      color: #c4c4c4;
      margin-bottom: 10px;
    }
    .name:hover {
      color: #ffffff;
    }
    .dots {
      margin-top: -19px;
    }
  }
}
</style>
