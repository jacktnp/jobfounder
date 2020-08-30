import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import request from '@/pages/request'
import adminpanel from '@/admin/approve'
import adminconfig from '@/admin/config'
import loginPage from '@/auth/loginPage'

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
    {
      path: '/adminpanel',
      name: 'adminpanel',
      component: adminpanel
    },
    {
      path: '/adminconfig',
      name: 'adminconfig',
      component: adminconfig
    },
    {
      path: '/login',
      name: 'loginPage',
      component: loginPage
    },
  ]
})
