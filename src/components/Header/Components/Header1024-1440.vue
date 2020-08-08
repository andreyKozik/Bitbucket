<template>
  <div class="nav">
    <div class="left">
      <img
        class="logo-rex"
        src="@/assets/img/logo/logo-rex.svg"
        alt="logo-rex"
      />
      <Lang />
    </div>

    <div class="center">
      <Icon
        icon="hamburger-open"
        alt="hamburger-open"
        size="25px"
        @click="openMenu"
      />
      <Menu v-if="isOpenMenu" @close="isOpenMenu = false" />
    </div>

    <div class="right">
      <MyAccount />
      <Icon
        class="dots"
        :isHover="false"
        size="10px"
        icon="delimeter-vertically"
      />
      <Balance />
      <Icon
        size="10px"
        :isHover="false"
        class="dots"
        icon="delimeter-vertically"
      />
      <Bell />
      <Icon
        size="10px"
        :isHover="false"
        class="dots"
        icon="delimeter-vertically"
      />
      <Basket />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Icon from "@/components/Icon/Icon.vue";
import Lang from "./Lang.vue";
import Menu from "./Menu.vue";
import MyAccount from "./MyAccount.vue";
import Balance from "./Balance";
import Bell from "./Bell";
import Basket from "./Basket.vue";

export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {
    Lang,
    Menu,
    MyAccount,
    Icon,
    Balance,
    Bell,
    Basket
  },
  data() {
    return {
      isOpenMenu: false
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang.header
    })
  },
  methods: {
    ...mapActions({
      changeLang: "changeLang"
    }),
    openMenu() {
      this.isOpenMenu = true;
      this.$router.push({ path: "menu" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.nav {
  height: 88px;
  width: 1440px;
  margin: 0 auto;
  @media (max-width: 1439px) {
    width: 100%;
  }
  background-color: $background;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    margin: -5px 0 0 32px;
    width: 163px;
    display: flex;
    justify-content: space-between;
  }
  .center {
    margin-left: 146px;
    margin-top: -3px;
  }
  .right {
    width: 312px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 28px;
    margin-top: -12px;
    color: $white;
  }
}
</style>
