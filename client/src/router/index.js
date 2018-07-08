import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import Home from '@/components/Home/Index'
import Login from '@/components/Auth/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
