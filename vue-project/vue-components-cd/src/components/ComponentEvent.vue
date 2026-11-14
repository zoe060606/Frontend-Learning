<template>
  <h3>组件事件</h3>
  <ChildEvent @someEvent="getHander" />
  <p>父元素：{{ message }}</p>
</template>
<script>
import ChildEvent from "./ChildEvent.vue";

export default {
  data() {
    return {
      message: "",
    };
  },
  components: {
    ChildEvent,
  },
  methods: {
    getHander(data) {
      console.log("触发了", "data");
      this.message = data;
    },
  },
};
</script>
