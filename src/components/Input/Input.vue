<template>
  <div class="input-block">
    <input
      class="input"
      type="text"
      v-model="input"
      :placeholder="placeholder"
    />
    <InnerWrapperBlock />
  </div>
</template>

<script>
/**
 * Component Input - Input
 * @module Components/Inputs/Input
 * @vue-prop {Boolean} input
 */

import InnerWrapperBlock from "@/components/InnerWrapperBlock.vue";
export default {
  name: "Input",
  components: {
    InnerWrapperBlock
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    input: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.input-block {
  position: relative;
  width: 100%;
  height: 30px;
  z-index: 2;
  input {
    background: rgba(11, 12, 35, 0.4);
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    z-index: 1;
    color: #c4c4c4;
    border: none;
    font-family: Open Sans;
    font-weight: 300;
    font-size: 12px;
  }
  input:focus {
    outline: none;
  }
}
</style>
