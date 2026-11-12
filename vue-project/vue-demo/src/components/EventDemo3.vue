<template>
  <h3>事件传参</h3>
  <button v-on:click="addCount('hello')">Add</button>
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
    addCount(msg) {
      // vue中的event对象就是JS中的event对象
      // e.target.innerHTML = "Add" + this.count;
      console.log(msg);
      this.count++;
    },
  },
};
</script>
