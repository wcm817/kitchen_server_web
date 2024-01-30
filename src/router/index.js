import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import { hasLoginCookie } from '@/utils/index.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/login.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
});

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next();
  }

  if (!hasLoginCookie() && to.name !== 'login') {
    next({
      path: '/path'
    })
  } else {
    next();
  }
})

export default router
