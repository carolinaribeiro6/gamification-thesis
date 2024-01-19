import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import DashboardPage from "./components/DashboardPage.vue";
import SideBar from "./components/SideBar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LoginPage },
    { path: "/dashboard", component: DashboardPage },
    { path: "/sidebar", component: SideBar }
  ],
});

export default router;