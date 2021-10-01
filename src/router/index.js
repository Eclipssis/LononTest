import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Projects from "../views/Projects.vue";
import ActivityPage from "../views/ActivitySingle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/activity/:id",
    name: "ActivityPage",
    component: ActivityPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
