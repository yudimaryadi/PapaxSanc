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
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../components/OrdersList.vue')
  },
  {
    path: '/addmenu',
    name: 'AddMenu',
    component: () => import('../views/AddMenuPage.vue') 
  },
  {
    path: '/editmenu/:id',
    name: 'EditMenu',
    component: () => import('../views/EditMenuPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('access_token') && to.name == 'Home'){ 
    next({ name: 'SignIn' })
  }
  else if (!localStorage.getItem('access_token') && to.name == 'Orders'){ 
    next({ name: 'SignIn' })
  }
  else if (!localStorage.getItem('access_token') && to.name == 'AddMenu'){ 
    next({ name: 'SignIn' })
  }
  else if (!localStorage.getItem('access_token') && to.name == 'EditMenu'){ 
    next({ name: 'SignIn' })
  }
  else if (localStorage.getItem('access_token') && to.name === 'SignIn'){
    next({ name : 'Home' })
  }
  else if (localStorage.getItem('access_token') && to.name === 'SignUp'){
    next({ name : 'Home' })
  }
  else {
    next()
  }
})

export default router
