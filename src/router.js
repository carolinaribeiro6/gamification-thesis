import {createRouter, createWebHistory} from 'vue-router';
import LoginPage from './components/LoginPage.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: LoginPage},

    ]
})