<template>
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="updataHandle">修改数据</button>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello",
    };
  },
  methods: {
    updataHandle() {
      this.message = "World";
    },
  },
  watch: {
    // 函数名必须和被侦听的数据对象名保持一致
    message(newvalue, oldvalue) {
      console.log(newvalue, oldvalue);
    },
  },
};
</script>
