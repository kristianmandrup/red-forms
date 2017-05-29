import {
  Home,
  User,
  Project,
  Environment,
  Organisation
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
    path: '/organisation',
    name: 'organisation',
    component: Organisation
  },
  {
    path: '/environment',
    name: 'environment',
    component: Environment
  },
]
