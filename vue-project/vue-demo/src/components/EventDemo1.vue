<template>
  <h3>内联事件处理器</h3>
  <button v-on:click="count++">Add</button>
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
};
</script>
