import { createRouter, createWebHistory } from 'vue-router'
import Top from '../pages/top-page.vue'
import Addnew from '../pages/add-new-page.vue'
import SignUp from '../pages/signup-page.vue'
import Login from '../pages/login-page.vue'

const routes = [
  {
    path: '/',
    name: 'golfInfo',
    component: Top
  },
  {
    path: '/addNew',
    name: 'Addnew',
    component: Addnew
  },
  {
    path: '/signup',
    name: 'singup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router