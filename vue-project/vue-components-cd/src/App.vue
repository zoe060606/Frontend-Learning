<template>
  <Parent />
  <ComponentEvent />
</template>
<script>
import Parent from "./components/Parent.vue";
import ComponentEvent from "./components/ComponentEvent.vue";
export default {
  data() {},
  components: {
    Parent,
    ComponentEvent,
  },
};
</script>
