import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import DashboardPage from "./components/dash/DashboardPage.vue";
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";
import RulesPage from './components/RulesPage.vue';
import MyWork from './components/work/MyWork.vue';
import RecordsPage from './components/work/RecordsPage.vue';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: LoginPage },
    { path: "/dashboard", component: DashboardPage },
    { path: "/sidebar", component: SideBar },
    { path: "/navbar", component: NavBar},
    { path: "/rules", component: RulesPage},
    { path: "/mywork", component: MyWork},
    { path: "/records", component: RecordsPage}
  ],
}); 


export default router;