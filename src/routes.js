import {
  Home,
  User,
  Users,
  Project,
  Projects,
  Repo,
  Repos,
  Environment,
  Environments,
  Organisation,
  Organisations,
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
    path: '/users',
    name: 'users',
    component: Users
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
    path: '/repos',
    name: 'repos',
    component: Repos
  },
  {
    path: '/organisation',
    name: 'organisation',
    component: Organisation
  },
  {
    path: '/organisations',
    name: 'organisations',
    component: Organisations
  },
  {
    path: '/environment',
    name: 'environment',
    component: Environment
  },
  {
    path: '/environments',
    name: 'environments',
    component: Environments
  },
]
