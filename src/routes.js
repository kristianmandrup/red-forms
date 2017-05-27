import {
  Home,
  User,
  Project,
  Environment
} from './components'

// import Simple from './components/Simple.vue'

export default [{
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
