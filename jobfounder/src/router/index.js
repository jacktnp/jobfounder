import Vue from 'vue'
import Router from 'vue-router'
import authen from '@/pages/authen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'authen',
      component: authen
    }
  ]
})
