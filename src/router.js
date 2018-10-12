import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import cm2 from './views/council-meeting-2.vue'
import ComingSoon from './views/ComingSoon.vue'
import post_View from './views/post-view.vue'
import Login from './views/login.vue'
import contentManager from './views/video-manager.vue'
import AuthGuard from './plugins/authGuard'
import postView from './views/postView'
import studioView from './views/studioView.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/studioView/:id',
    name: 'studioView',
    component: studioView,
    props: true
  },
  {
    path: '/play/:id',
    name: 'player',
    component: postView,
    props: true
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/content-manager',
    name: 'contentManager',
    component: contentManager,
    beforeEnter: AuthGuard
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/theatre/view/:id',
    name: 'post_View',
    props: true,
    component: post_View,
    beforeEnter: AuthGuard
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
