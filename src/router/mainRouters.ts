import menuApplication from "../layouts/menu-application.vue";
import NotmenuApplication from "../layouts/not-menu-application.vue";
const mainRoutes = [
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
      children: [
        { path: 'ThemLaiXe', component: () => import("../views/AboutView.vue") },
      ],
    },
    {
      path: "/xx",
      name: "xx",
      meta: { requiresAuth: "ThemLaiXe", layout: NotmenuApplication },
      component: () => import("../views/PageLasles/index.vue"),
    },
  ];
  
  export default mainRoutes;