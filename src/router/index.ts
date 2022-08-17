import EscapingButtonVue from "../pages/EscapingButton.vue";
import { createRouter, createWebHistory } from "vue-router";
import StartPage from "../pages/startPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StartPage,
    },
    {
      path: "/normal_blog",
      name: "escapingButton",
      component: EscapingButtonVue,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
