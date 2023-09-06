import { ref, computed } from "vue";
import { defineStore } from "pinia";
import authService from "../api/authService";
import TokenService from "../utils/token.service";
import { LoginData } from "../interfaces/auth";
export const useAuthStore = defineStore("auth", () => {
  const count = ref(0); // state
  const doubleCount = computed(() => count.value * 2); // getters
  async function increment() {
    // actions
    count.value++;
  }

  const login = async (data: LoginData) => {
    try {
      const result = await authService.logIn(data);
      result;
      TokenService.setUser(result);
    } catch (error) {
      console.log("error");
    }
  };

  return { count, doubleCount, increment, login };
});
