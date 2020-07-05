import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component:() =>import("../views/Home.vue"),
  },
  {
    path: '/',
    name: 'Login',
    component:() => import("../views/Login.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    component:() => import("../views/Register.vue"),
  },
  {
    path: '/forget',
    name: 'Forget',
    component:() => import("../views/Forget.vue"),
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component:() => import("../views/Homepage.vue"),
  },
]

const router = new VueRouter({
  routes
})

export default router
