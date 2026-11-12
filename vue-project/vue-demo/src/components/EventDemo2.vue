<template>
  <h3>方法事件处理器</h3>
  <button v-on:click="addCount">Add</button>
  <!-- 更简单的写法
   <button @:click="count++">Add</button>
  -->
  <p>{{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  // 所有的方法/函数都放在这里
  methods: {
    addCount() {
      this.count++;
    },
  },
};
</script>
