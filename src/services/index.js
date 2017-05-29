import {
  project
} from './project'
import {
  user
} from './user'
import {
  environment
} from './environment'

export function configure(opts) {
  return {
    $project: project(opts),
    $environment: environment(opts),
    $user: user(opts)
  }
}
