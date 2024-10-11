import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { LaiXeItem, xxxxxx } from "@/interfaces/LaiXe";
import LaiXeService from "../api/laiXe/laiXeService";
// interface LaiXeItem {
//   hoten: string;
//   tuoi: number;
// }
export const useLaiXeStore = defineStore("laiXe", () => {
  // state
  const DanhSachLaiXe = ref<LaiXeItem[]>([]);
  const Test = ref(0);
  // getters
  //   const doubleCount = computed(() => count.value * 2)

  // actions

  const LayDanhSachLaiXe = async () => {
    // DanhSachLaiXe.value = [{ hoten: "hihi", tuoi: 21 }];
    // Test.value = 20
    // return true

    try {
      const result = await LaiXeService.logIn(data);
      result;
    } catch (error) {
      console.log("error");
    }
  };

  return { DanhSachLaiXe, LayDanhSachLaiXe, Test };
});
// Khai báo kiểu cho store
