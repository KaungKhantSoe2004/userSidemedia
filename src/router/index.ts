import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../views/HomePage.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("mediaToken")) {
        next();
      } else {
        next("login");
      }
    },
  },
  {
    path: "/detailsPage/:id",
    name: "EachDetailsPage",
    component: () => import("../views/DetailsPage.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("mediaToken")) {
        next();
      } else {
        next("login");
      }
    },
  },
  {
    path: "/login",
    name: "loginPage",

    component: () => import("../views/loginPage.vue"),
  },
  {
    path: "/:patchMatch(.*)*",
    name: "error",

    component: () => import("../views/ErrorPage.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/register",
    name: "register",

    component: () => import("../views/registerPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
