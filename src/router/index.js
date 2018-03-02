import Vue from 'vue'
//import Router, { VueRouter } from 'vue-router'
import VueRouter  from 'vue-router'
import VueResource from 'vue-resource'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
 mode: 'history',
 routes
})

router.beforeEach((to, from, next )=> {
  //console.log(to)
  if(to.meta.requiresAuth){
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(authUser && authUser.access_token){
      next() 
    } else {
      next({name: 'Index'})
    }
  }
  next()
})

new Vue({
  router
})


export default router

//router.beforEach((to, from, next )=> {
//  console.log(to)
//})

/*
Vue.use(Router)
export default new Router({
  
  routers:[
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    }
  ]
  
});
*/

