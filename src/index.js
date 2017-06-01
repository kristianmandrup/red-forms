import Vue from 'vue'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueFetch from 'vue-fetch'
import Vuex from 'vuex'
import VueSupply from 'vue-supply'
import VueEvents from 'vue-events'

import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'

// tada!
Vue.use(VueRx, Rx)

// when using FeathersJS
// import VueFeathers from 'vue-feathers-services'
// Vue.use(VueFeathers, app)

Vue.use(VueEvents)
Vue.use(Vuex)
Vue.use(VueSupply)

Vue.use(VueFetch, {
  // load promise polyfill
  // polyfill: true
});
Vue.use(VueMaterial)
Vue.use(VueRouter)
import {
  App
} from './components'
import routes from './routes'

// console.log({
//   routes
// })

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // console.log('router', {
  //   to,
  //   from
  // })
  next()
})

const app = new Vue({
  router,
  ...App
}).$mount('#app')
