import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import request from '@/pages/request'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/request',
      name: 'request',
      component: request
    },
  ]
})
