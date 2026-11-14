<template>
  <h3>Parent</h3>
  <Child :title="message" demo="测试" :age="age" />
</template>
<script>
import Child from "./Child.vue";
export default {
  data() {
    return {
      message: "Parent数据",
      age: 20,
    };
  },
  components: {
    Child,
  },
};
</script>
