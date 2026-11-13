<template>
  <h3>计算属性</h3>
  <p>{{ chengxuyuanContent }}</p>
</template>
<script>
export default {
  data() {
    return {
      chengxuyuan: {
        name: "程序员",
        content: ["it", "ot", "ct"],
      },
    };
  },
  // 计算属性
  computed: {
    chengxuyuanContent() {
      return this.chengxuyuan.content.length > 0 ? "Yes" : "No";
    },
  },
};
</script>
