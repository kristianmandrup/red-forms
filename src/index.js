import Vue from 'vue'
import App from './components/App.vue'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

import VueRouter from 'vue-router'

import {
  User,
  // Project,
  // Environment
} from './components'

const routes = [{
    path: '/',
    component: User
  },
  {
    path: '/user',
    component: User
  },
  // {
  //   path: '/project',
  //   component: Project
  // },
  // {
  //   path: '/environment',
  //   component: Environment
  // },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
