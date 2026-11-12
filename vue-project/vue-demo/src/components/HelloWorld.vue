<template>
  <div v-bind:class="msg" v-bind:id="dynaicId">测试</div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs">测试2.0</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "active",
      dynaicId: "appid",
      isButtonDisabled: true,
      objectOfAttrs: {
        class: "active",
        id: "appid",
      },
    };
  },
};
</script>
<style>
.active {
  color: aqua;
}
</style>
