import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import DashboardPage from "./components/dash/DashboardPage.vue";
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LoginPage },
    { path: "/dashboard", component: DashboardPage },
    { path: "/sidebar", component: SideBar },
    { path: "/navbar", component: NavBar}
  ],
});

export default router;