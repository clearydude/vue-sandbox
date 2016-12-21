import Vue from 'vue'
import VueRouter from 'vue-router'
import Subscribe from './components/Subscribe'
import Signup from './components/Signup'
import Login from './components/Login'
import User from './components/User'

Vue.use(VueRouter)

// define any routes

const routes = [
  { path: '/subscribe', component: Subscribe },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '/users/:id', component: User }
]

export default new VueRouter({
  routes
})
