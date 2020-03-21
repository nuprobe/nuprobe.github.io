/* eslint-disable object-curly-spacing */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/authorization/Register.vue';
import Login from '@/views/authorization/Login.vue';
import ForgotPassword from '@/views/authorization/ForgotPassword.vue';
import Dashboard from '@/views/Dashboard.vue';
import Kit from '@/views/Kit.vue';
import Orders from '@/views/Orders.vue';

Vue.use(VueRouter);
const routes = [
  { path: '/register', component: Register, meta: { layout: 'guest-layout' } },
  { path: '/login', component: Login, meta: { layout: 'guest-layout' } },
  { path: '/forgot/password', component: ForgotPassword, meta: { layout: 'guest-layout' } },
  { path: '/', component: Dashboard, meta: { layout: 'auth-layout' } },
  { path: '/kit', component: Kit, meta: { layout: 'auth-layout' } },
  { path: '/orders', component: Orders, meta: { layout: 'auth-layout' } },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
