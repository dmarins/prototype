import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () =>
      import(/* webpackChunkName: "welcome" */ "../views/Welcome.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "test" */ "../views/Test.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
