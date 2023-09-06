import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)// state
  const doubleCount = computed(() => count.value * 2) // getters
  function increment() {// actions
    count.value++
  }

  return { count, doubleCount, increment }
})
