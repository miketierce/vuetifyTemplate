import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import VueMediaEmbed from 'vue-media-embed'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueScrollto from 'vue-scrollto'
import 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import _ from 'lodash'
// require styles
import 'swiper/dist/css/swiper.css'
import alertCmp from '@/components/alert.vue'
import DateFilter from './plugins/dateFilter'
import VueMq from 'vue-mq'
import axios from 'axios'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import round from 'vue-round-filter'

// import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueVideoPlayer, {
  options: global,
  events: global,
  componentId: 'VueVideoPlayer'
})

// Vue.use(VueYouTubeEmbed, {
//   global: true,
//   componentId: 'youtube-media'
// })

Vue.use(axios)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})

Vue.filter('round', round)
Vue.filter('date', DateFilter)

Vue.component('app-alert', alertCmp)

Vue.use(_)
Vue.use(vueScrollto)

Vue.use(VueAwesomeSwiper)

Vue.use(VueMediaEmbed, {
  store
})

var filter = function (text, length, clamp) {
  clamp = clamp || '...'
  var node = document.createElement('div')
  node.innerHTML = text
  var content = node.textContent
  return content.length > length ? content.slice(0, length) + clamp : content
}

Vue.filter('timeInHours', function (value) {
  let hours = parseInt(Math.floor(value / 3600))
  let minutes = parseInt(Math.floor((value - (hours * 3600)) / 60))
  let seconds = parseInt((value - ((hours * 3600) + (minutes * 60))) % 60)

  let dHours = (hours > 9 ? hours : '0' + hours)
  let dMins = (minutes > 9 ? minutes : '0' + minutes)
  let dSecs = (seconds > 9 ? seconds : '0' + seconds)

  return dHours + ':' + dMins + ':' + dSecs
})

Vue.filter('truncate', filter)

Vue.filter('formatNumber', function (value) {
  const rounded = Math.round(value * 100) / 100
  return rounded.toString().replace('.', ',').replace(
    /\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      // firebase api credentails here
      apiKey: 'AIzaSyDpokfUZDzgek949X577pHsu9co_5UVLuY',
      authDomain: 'stv-app.firebaseapp.com',
      databaseURL: 'https://stv-app.firebaseio.com',
      projectId: 'stv-app',
      storageBucket: '',
      messagingSenderId: '429505354237'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadVideoPosts')
  }
}).$mount('#app')
