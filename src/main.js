import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMediaEmbed from 'vue-media-embed'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueScrollto from 'vue-scrollto'
// require styles
import 'swiper/dist/css/swiper.css'

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
  render: h => h(App)
}).$mount('#app')
