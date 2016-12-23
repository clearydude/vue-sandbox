import Vue from 'vue'
import VueRouter from 'vue-router'
import Subscribe from './components/Subscribe'
import Signin from './components/Signin'
import Login from './components/Login'
import User from './components/User'

Vue.use(VueRouter)

// define any routes

const routes = [
  { path: '/', component: Signin },
  { path: '/subscribe', component: Subscribe },
  { path: '/signup', component: Signin },
  { path: '/login', component: Login },
  { path: '/users/:id', component: User },
  { path: '*', redirect: '/' }
]

let router = new VueRouter({
  routes
})

export default router
