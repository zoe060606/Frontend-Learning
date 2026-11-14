<template>
  <h3>Child</h3>
  <p>{{ title }}</p>
  <p>{{ demo }}</p>
  <p>{{ age }}</p>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "demo", "age"],
};
</script>
