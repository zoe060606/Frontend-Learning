<template>
  <h3>条件渲染</h3>
  <div v-if="flag">can you see me?</div>
  <div v-else>look at me</div>
  <!-- 多值 -->
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <div v-show="flag">can you see me?</div>
</template>

<script>
export default {
  data() {
    return {
      flag: this.false,
      type: "B",
    };
  },
};
</script>
