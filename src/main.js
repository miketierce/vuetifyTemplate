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

Vue.filter('truncate', filter)

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
  }
}).$mount('#app')
