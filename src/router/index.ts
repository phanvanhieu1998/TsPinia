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
  // Logic kiểm tra quyền truy cập
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const role = getInfo().role;
    const listRole: any = {
      Admin: ["ThemLaiXe", "ChiTiet"],
      User: ["ThemLaiXe"],
    };
    if (!getInfo().token && !role) {
      next({ path: "/login" });
    } else if (
      to.meta.requiresAuth &&
      !listRole[getInfo().role].includes(to.meta.requiresAuth)
    ) {
      next("/403");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;