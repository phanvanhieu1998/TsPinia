import { createRouter, createWebHistory } from "vue-router";
import { getInfo } from "../utils/auth.ts";
import authRoutes from "./authRouters";
import mainRoutes from './mainRouters';
// import layoutRoutes from './layoutRoutes';

const routes = [
  ...authRoutes,
  ...mainRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const role = getInfo().role;
    const listRole: any = {
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