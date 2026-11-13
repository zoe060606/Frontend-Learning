<template>
  <h3>事件修饰符</h3>
  <!-- .prevent，阻止默认事件 -->
  <a @click.prevent="clickHandle" href="https://baidu.com">百度</a>
  <div @click="clickDiv">
    <!-- .stop,阻止事件冒泡到父元素 -->
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickHandle() {
      console.log("点击了");
    },
    clickDiv() {
      console.log("div");
    },
    clickP() {
      console.log("P");
    },
  },
};
</script>
