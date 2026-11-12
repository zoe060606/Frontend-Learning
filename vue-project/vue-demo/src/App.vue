<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import IfDemo from "./components/IfDemo.vue";
import ListDemo from "./components/ListDemo.vue";
import EventDemo1 from "./components/EventDemo1.vue";
import EventDemo2 from "./components/EventDemo2.vue";
import EventDemo3 from "./components/EventDemo3.vue";
import EventDemo4 from "./components/EventDemo4.vue";
</script>

<template>
  <HelloWorld />
  <IfDemo />
  <ListDemo />
  <EventDemo1 />
  <EventDemo2 />
  <EventDemo3 />
  <EventDemo4 />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
