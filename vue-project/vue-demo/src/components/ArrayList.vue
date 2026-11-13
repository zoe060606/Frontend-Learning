<template>
  <h3>数组变化侦听</h3>
  <button @click="addListHandle">添加数据</button>
  <ul>
    <li v-for="(item, index) in names" :key="index">{{ item }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      names: ["iwen", "iwe", "it"],
    };
  },
  methods: {
    addListHandle() {
      // 引起UI自动更新（变更）
      this.names.push("sasa");
      // 不会引起UI自动更新(替换数组)
      // this.names.concat(["sasa"]);
      // 引起变化
      // this.names = this.names.concat(["sasa"]);
    },
  },
};
</script>
