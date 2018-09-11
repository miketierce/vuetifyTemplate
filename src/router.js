import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import cm2 from './views/council-meeting-2.vue'
import ComingSoon from './views/ComingSoon.vue'
import postView from './views/post-view.vue'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/ComingSoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/theatre/view/:id',
    name: 'postView',
    props: true,
    component: postView
  },
  {
    path: '/council-meeting-2',
    name: 'cm2',
    component: cm2
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
