<template>
  <h3>ChildEvent</h3>
  <button @click="clickEventHander">传递数据</button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickEventHander() {
      this.$emit("someEvent", "Child数据");
    },
  },
};
</script>
