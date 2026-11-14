<template>
  <MyComponent />
  <Header />
  <Main />
  <Aside />
</template>
<script>
import MyComponent from "./components/MyComponent.vue";
import Aside from "./pages/Aside.vue";
// import Header from "./pages/Header.vue";
import Main from "./pages/Main.vue";

export default {
  components: {
    MyComponent,
    // Header,
    Main,
    Aside,
  },
};
</script>
<style></style>
