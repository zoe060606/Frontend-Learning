<template>
  <p :style="{ color: activeColor, fontSize: activefontSize }">Style绑定</p>
  <p :style="styleObject">Style绑定2</p>
</template>
<script>
export default {
  data() {
    return {
      activeColor: "green",
      activefontSize: "30px",
      styleObject: {
        color: "red",
        fontSize: "20px",
      },
    };
  },
};
</script>
