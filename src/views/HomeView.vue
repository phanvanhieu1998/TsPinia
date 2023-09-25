<script setup lang="ts">

import { ref,onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import AboutView from "./AboutView.vue";
const authStore = useAuthStore();
const foo = ref("rsx");
const login = async () => {
  try {
    const rs = await authStore.login({
      username: "Test",
      password: 12345,
    });
  } catch (error) {
    console.log("error", error);
  }
};
const change = (value,value2) =>{
  console.log('value',value,value2)
}
const child = ref(null)
onMounted(() => {
  // child.value will hold an instance of <Child />
  console.log('child',child._value.hihi = 'xxxxxxxxx')
})

</script>

<template>
  <main>
    nội dung Home
    <AboutView ref="child" :foo="foo" @change="change" />
    <button @click="login()">xxxxxxxxxx</button>
  </main>
</template>
