import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: 'Login'
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
