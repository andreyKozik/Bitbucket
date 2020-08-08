<template>
  <div class="news">
    <div class="header">
      <div class="header">{{ lang.header }}</div>
    </div>
    <div class="main">
      <InnerWrapperBlock />
      <div class="switch">
        <img src="@/assets/img/icon/square-point.svg" alt="square" />
        <img src="@/assets/img/icon/square.svg" alt="square" />
        <img src="@/assets/img/icon/square.svg" alt="square" />
      </div>
      <img src="@/assets/img/baner/banner1.svg" alt class="banner" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InnerWrapperBlock from "@/components/InnerWrapperBlock";

export default {
  name: "News",
  props: {},
  components: {
    InnerWrapperBlock
  },
  computed: {
    ...mapState({
      lang: state => state.lang.main.news
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
@import "@/views/Main/main.scss";

.news {
  width: 209px;
  height: 747px;
  margin: 71px 90px 0 30px;
  letter-spacing: -0.1px;
  .header {
    .header {
      @include main-block-header;
      margin-bottom: 13px;
      margin-left: -3px;
    }
  }
  .main {
    position: relative;
    height: 699px;
    width: 209px;
    .switch {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50px;
      bottom: 0;
      right: 0;
      margin: 0 17px 16px 0;
    }
  }
}
</style>
