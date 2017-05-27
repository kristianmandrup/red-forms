import Vue from 'vue'
import App from './components/App.vue'
import 'vue-material/dist/vue-material.css'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
Vue.use(VueMaterial)
Vue.use(VueRouter)

import {
  Home,
  User,
  Project,
  Environment
} from './components'

const routes = [{
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/environment',
    name: 'environment',
    component: Environment
  },
]

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
