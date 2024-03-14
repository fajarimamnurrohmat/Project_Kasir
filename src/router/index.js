import { createWebHistory, createRouter } from "vue-router";
import Admin from "../components/Admin.vue";
import User from "../components/User.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
