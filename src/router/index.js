import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import { hasLoginCookie } from '@/utils/index.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // redirect: (a, b, c) => {
    //   console.log('redirect:::', a, b, c);
    //   return
    // },
    // children: [

    // ]
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
    return next({
      path: '/login'
    })
  } else {
    next();
  }
});


// 解决 Redirected when going from “/login“ to “/“ via a navigation guard错误提示
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
