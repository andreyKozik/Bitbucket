<template>
  <div class="header">
    <div class="nav">
      <Contr class="controls" />
      <img
        class="logo-rex"
        src="@/assets/img/logo/logo-rex.svg"
        alt="logo-rex"
      />
      <Basket class="basket" />
    </div>
    <div class="menu">HOME</div>
  </div>
</template>

<script>
import {} from "vuex";
import Basket from "./Basket";
import Contr from "./Contr";

export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {
    Contr,
    Basket
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

.header {
  width: 100%;
  background-color: $background;
  .nav {
    height: 19vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .controls {
      margin: 6px 0 0 62px;
      @media (max-width: 767px) {
        margin: -1px 0 0 28px;
      }
    }
    .logo-rex {
      width: 13.6vw;
      height: 30px;
      margin: 6px -30px 0px 0;
      @media (max-width: 767px) {
        width: 15.6vw;
        margin: -4px -33px 0px 0;
      }
    }
    .basket {
      color: $white;
      margin: 6px 61px 0px 0;
      @media (max-width: 767px) {
        margin: 1px 29px 0px 0;
      }
    }
  }
  .menu {
    font-family: "Exo-medium";
    font-weight: 500;
    font-size: 5.8vw;
    @media (max-width: 767px) {
      font-size: 8.6vw;
    }
    line-height: 6.2vw;
    color: #ffffff;
    margin: 30px 0 0 0;
  }
}
</style>
