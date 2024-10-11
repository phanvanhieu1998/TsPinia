import menuApplication from "../layouts/menu-application.vue";
import NotmenuApplication from "../layouts/not-menu-application.vue";
const authRoutes = [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login/index.vue"),
      meta: { requiresAuth: false, layout: NotmenuApplication },
    },
    {
      path: "/403",
      name: "notAccess",
      component: () => import("../views/NotAccess/index.vue"),
      meta: { requiresAuth: false, layout: NotmenuApplication },
    },
  ];
  
  export default authRoutes;