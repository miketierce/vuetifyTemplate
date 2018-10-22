import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import AuthGuard from './plugins/authGuard'
import ComingSoon from './views/ComingSoon.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
    path: '/',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    beforeEnter: AuthGuard
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
  }
  ]
})
