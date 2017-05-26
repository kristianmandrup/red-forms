import Vue from 'vue'
import App from './components/App.vue'
import 'vue-material/dist/vue-material.css'

var Vue = require('vue')
var VueMaterial = require('vue-material')

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})
