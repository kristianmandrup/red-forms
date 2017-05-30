import {
  Home,
  User,
  Project,
  Projects,
  Repo,
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
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/repo',
    name: 'repo',
    component: Repo
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
