import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import("../views/CV.vue"),
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: () => import("../views/TimeLine.vue"),
  },
  {
    path: "/photos",
    name: "Photos",

    component: () => import("../views/PhotoGallery.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/VisitedMap.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/HomePage.vue";

// createRouter({
//   history: createWebHistory(),
//   routes: [],
// });

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: HomePage,
//   },
//   {
//     path: "/cv",
//     name: "CV",
//     component: () => import("../views/CV.vue"),
//   },
//   {
//     path: "/timeline",
//     name: "Timeline",
//     component: () => import("../views/TimeLine.vue"),
//   },
//   {
//     path: "/photos",
//     name: "Photos",

//     component: () => import("../views/PhotoGallery.vue"),
//   },
//   {
//     path: "/map",
//     name: "Map",
//     component: () => import("../views/VisitedMap.vue"),
//   },
// ];

// export default routes;
