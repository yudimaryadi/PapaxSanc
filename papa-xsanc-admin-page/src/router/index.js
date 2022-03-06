import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../components/SignUp.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../components/OrdersList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('access_token') && to.name === 'Home'){ 
    next({ name: 'SignIn' })
  }
  else if (localStorage.getItem('access_token') && to.name === 'SignIn'){
    next({ name : 'Home' })
  }
  else {
    next()
  }
})

export default router
