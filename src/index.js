import Vue from 'vue'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
Vue.use(VueMaterial)
Vue.use(VueRouter)
import {
  App
} from './components'
import routes from './routes'

console.log({
  routes
})

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log('router', {
    to,
    from
  })
})

const app = new Vue({
  router,
  ...App
}).$mount('#app')
