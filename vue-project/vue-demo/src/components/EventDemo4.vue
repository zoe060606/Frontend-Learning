<template>
  <h3>事件传参2</h3>
  <p
    @click="getNmaeHandler(item, $event)"
    v-for="(item, index) in names"
    :key="index"
  >
    {{ item }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      names: ["aa", "bb", "cc"],
    };
  },

  methods: {
    getNmaeHandler(name, e) {
      console.log(names);
      console.log(e);
    },
  },
};
</script>
