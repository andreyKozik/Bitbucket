<template>
  <div id="app">
    <Header />
    <div class="contentApp">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    this.listenerWindowWidth();
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: state => state.WINDOW_WIDTH
    })
  },
  methods: {
    ...mapActions({
      changeWindowWidth: "changeWindowWidth"
    }),
    listenerWindowWidth() {
      this.changeWindowWidth(window.innerWidth);
      window.addEventListener(
        `resize`,
        e => {
          this.changeWindowWidth(e.target.innerWidth);
        },
        false
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

@font-face {
  font-family: "Exo-bold";
  src: url("~@/assets/fonts/exo/Exo-Bold.ttf");
}

@font-face {
  font-family: "Exo-medium";
  src: url("~@/assets/fonts/exo/Exo-Medium.ttf");
}

@font-face {
  font-family: "Exo-regular";
  src: url("~@/assets/fonts/exo/Exo-Regular.ttf");
}

@font-face {
  font-family: "OpenSans-bold";
  src: url("~@/assets/fonts/open_sans/OpenSans-Bold.ttf");
}

@font-face {
  font-family: "OpenSans-light";
  src: url("~@/assets/fonts/open_sans/OpenSans-Light.ttf");
}

@font-face {
  font-family: "OpenSans-regular";
  src: url("~@/assets/fonts/open_sans/OpenSans-Regular.ttf");
}

@font-face {
  font-family: "OpenSans-semiBold";
  src: url("~@/assets/fonts/open_sans/OpenSans-SemiBold.ttf");
}

body {
  margin: 0;
  padding: 0;
  background-color: #0b0c23;
}

#app {
  font-family: "Exo-regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  .contentApp {
    min-height: calc(100vh - 170px);
  }
}
</style>
