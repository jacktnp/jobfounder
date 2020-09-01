import Vue from 'vue'
import Router from 'vue-router'
import feed from '@/pages/feed'
import explore from '@/pages/explore'
import dashboard from '@/pages/dashboard'
import profile from '@/pages/profile'
import logout from '@/pages/logout'
import stdprofile from '@/pages/stdprofile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'feed',
      component: feed
    },
    {
      path: '/explore',
      name: 'explore',
      component: explore
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/student/:username',
      name: 'stdprofile',
      component: stdprofile,
      params: true
    },
    { 
      path: '*',
      redirect: '/'
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })