// import {
//   Home,
//   User,
//   Project,
//   Environment
// } from './components'

import Home from './components/Home.vue'
import Simple from './components/Simple.vue'

export default [{
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/user',
    name: 'user',
    component: Simple
  },
  // {
  //   path: '/project',
  //   name: 'project',
  //   component: Project
  // },
  // {
  //   path: '/environment',
  //   name: 'environment',
  //   component: Environment
  // },
]
