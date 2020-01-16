import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
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
    path: "/test1",
    name: "test1",
    component: () =>
      import(/* webpackChunkName: "test1" */ "../views/Test1.vue")
  },
  {
    path: "/test2",
    name: "test2",
    component: () =>
      import(/* webpackChunkName: "test2" */ "../views/Test2.vue")
  },
  {
    path: "/test3",
    name: "test3",
    component: () =>
      import(/* webpackChunkName: "test3" */ "../views/Test3.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
