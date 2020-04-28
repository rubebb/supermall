import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Catagory = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Cart = () => import('../views/cart/Cart')


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catagory',
    component: Catagory
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
