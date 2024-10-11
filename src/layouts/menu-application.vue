<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <div>
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                style="height: 98vh"
                default-active="2"
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                text-color="#fff"
                router="true"
              >
                <div v-for="(item, index) in listMenu" :key="index">
                  <el-sub-menu :index="index + 1" v-if="item.sub && item.sub.length > 0">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>{{ item.text }}</span>
                    </template>

                    <el-menu-item
                      v-for="(_item, _index) in item.sub"
                      :key="_index"
                      :index="`${index + 1}-${_index + 1}`"
                      :route="_item.route"
                    >
                      <el-icon><location /></el-icon>
                      {{ _item.text }}</el-menu-item
                    >
                  </el-sub-menu>
                  <el-menu-item :index="index + 1" :route="item.route" v-else>
                    {{ item.text }}
                  </el-menu-item>
                </div>
              </el-menu>
            </el-col>
          </el-row>
        </div></el-aside
      >
      <div>
        <slot />
      </div>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
const listMenu = [
  {
    text: "Quản xx",
    route: "/",
  },
  {
    text: "Quản lý thông tin",
    route: "",
    sub: [
      {
        text: "Lái Xe",
        route: "/QuanLyThongTin/LaiXe",
      },
      {
        text: "Lái Xe",
        route: "/QuanLyThongTin/LaiXe",
      },
      {
        text: "Lái Xe",
        route: "/QuanLyThongTin/LaiXe",
      },
      {
        text: "Lái Xe",
        route: "/QuanLyThongTin/LaiXe",
      },
    ],
  },
  {
    text: "Quản xx",
    route: "/",
  },
];
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.container {
  display: flex;
}
.common-layout {
  display: flex;
}
</style>
