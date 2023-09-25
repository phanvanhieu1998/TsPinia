<template>
  <div class="about">
    <h1>This is an about page</h1> 
    {{ hihi }}
    {{ props.foo }}
    <button @click="xxx"></button>
  </div>
</template>
<script setup lang="ts">
import { ref,onMounted } from "vue";

const hihi = ref(null)
defineExpose({
 hihi
})
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number,
});
// const emit = defineEmits(['change', 'update'])
const emit = defineEmits<{
  change: [id: number,b: object]
  // update: [value: string]
}>()

const xxx = (event) =>{
  emit("change",10,{name:'hieuj'})

}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
