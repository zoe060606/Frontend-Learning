<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? "Yes" : "No" }}</p>
  <p>{{ message.split("").reverse().join() }}</p>
  <p>{{ rawhtml }}</p>
  <p v-html="rawhtml"></p>
</template>

<script>
export default {
  data() {
    return {
      msg: "神奇的语法",
      number: 10,
      ok: true,
      message: "大家好",
      rawhtml: "<a href='https://baidu.com'>百度</a>",
    };
  },
};
</script>

<style scoped></style>
