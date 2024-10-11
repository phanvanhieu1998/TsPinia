<!-- <template>
  <div style="width:99%">
    <div class="breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Quản lý thông tin</el-breadcrumb-item>
        <el-breadcrumb-item>Danh sách lái xe</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    {{functionPermissions[role]}} xx
    <div v-if="functionPermissions[role].ThemLaiXe">xxxxxxxxx</div>
    <About />

    <h1>{{ first }} {{ last }}</h1>
  <About
    v-model:first-name="first"
    v-model:last-name="last"
  />
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { getInfo } from "@/utils/auth.ts";
import About from "@/views/AboutView.vue"
import { ref } from 'vue'
 const role = getInfo().role;
const functionPermissions = {
  Admin: {
    ThemLaiXe: true,
    XoaLaiXe: true,
    CapNhatLaiXe: true,
  },
  User: {
    ThemLaiXe: false,
    XoaLaiXe: false,
    CapNhatLaiXe: true,
  },
};

const first = ref('John')
const last = ref('Doe')
</script>

<style scoped>
.breadcrumb {
  width: 100%;
  height: 46px;
  background-color: #dcdcdc;
  display: flex;

  align-items: center;
  padding-left: 20px;
}
</style> -->
<script setup>
import { ref,reactive } from 'vue'
import UserName from "@/views/AboutView.vue"

const listObj = reactive(
  {
    first:'jone1',
    last: 'doe1'
  },
)
const last = ref('Doe')
</script>

<template>
  <h1>{{ listObj }}</h1>
  <!-- <div v-for="(item, index) in listObj" :key="index"> -->
    <UserName
      v-model:list-obj="listObj"
    />
  <!-- </div> -->

    <!-- v-model:last-name="last" -->
</template>