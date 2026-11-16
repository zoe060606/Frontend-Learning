<template>
  <Slots>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </Slots>
  <Slots2>
    <template #header>
      <h3>{{ message }}</h3>
    </template>
    <template v-slot:main>
      <p>内容</p>
    </template>
  </Slots2>
</template>
<script>
import Slots from "./components/slots.vue";
import Slots2 from "./components/Slots2.vue";
export default {
  data() {
    return {
      message: "续集",
    };
  },
  components: {
    Slots,
    Slots2,
  },
};
</script>
