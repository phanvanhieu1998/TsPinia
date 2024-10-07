<template>
  <div style="width:99%">
    <div class="breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">Quản lý thông tin</el-breadcrumb-item>
        <el-breadcrumb-item>Danh sách lái xe</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    {{functionPermissions[role]}} xx
    <div v-if="functionPermissions[role].ThemLaiXe">xxxxxxxxx</div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { getInfo } from "@/utils/auth.ts";
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
</style>
