import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppLogin from '../components/login/AppLogin.vue';

const routes = [
    {path: '/login', component: AppLogin}
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router