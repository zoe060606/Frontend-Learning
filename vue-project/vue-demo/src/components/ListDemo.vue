<template>
  <h3>列表渲染</h3>
  <p v-for="(item, index) of names" :key="index">{{ item }}-{{ index }}</p>
  <div v-for="item in result" :key="item.id">
    <p>{{ item.title }}</p>
    <img :src="item.avator" alt="" />
  </div>
  <div>
    <p v-for="(value, key, index) in userInfo">
      {{ value }}-{{ key }}-{{ index }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      names: ["aa", "bb", "cc"],
      result: [
        {
          id: 22536,
          title: "鄂尔多斯",
          avator: "https://baidu.com",
        },
      ],
      userInfo: {
        name: "anny",
        age: 20,
        sex: "女",
      },
    };
  },
};
</script>
