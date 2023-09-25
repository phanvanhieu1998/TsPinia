import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import menuApplication from "../layouts/menu-application.vue";
import NotmenuApplication from "../layouts/not-menu-application.vue";
import TokenService from "../utils/token.service"; 
import { getInfo } from "../utils/auth.ts";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login/index.vue"),
	  meta: { requiresAuth: false, layout: NotmenuApplication,  },
    },
    {
      path: "/403",
      name: "notAccess",
      component: () => import("../views/NotAccess/index.vue"),
	  meta: { requiresAuth: false, layout: NotmenuApplication },
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { requiresAuth: "ChiTiet", layout: menuApplication },
    },
    {
      path: "/about",
      name: "about",
      meta: { requiresAuth: true, layout: menuApplication },
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/QuanLyThongTin/LaiXe",
      name: "LaiXe",
      meta: { requiresAuth: "ThemLaiXe", layout: menuApplication },
      component: () => import("../views/QuanLyThongTin/LaiXe/index.vue"),
    },
    {
      path: "/xx",
      name: "xx",
      meta: { requiresAuth: "ThemLaiXe", layout: NotmenuApplication },
      component: () => import("../views/PageLasles/index.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const role = getInfo().role;
    const listRole = {
      Admin: ["ThemLaiXe", "ChiTiet"],
      User: ["ThemLaiXe"],
    };
    if (!getInfo().token && !role) {
      next({
        // Người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
        path: "/login",
        // query: { redirect: to.fullPath }
      });
    } else if (
      to.meta.requiresAuth &&
      !listRole[getInfo().role].includes(to.meta.requiresAuth)
    ) {
      // 如果没有权限，则进入403
      next("/403");
    } else {
      // Người dùng đã đăng nhập, cho phép truy cập
      next();
    }
  } else {
    // Route không yêu cầu xác thực, cho phép truy cập
    next();
  }
});

export default router;
