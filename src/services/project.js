import {
  model
} from './model'

export function project(opts = {}) {
  opts.name = 'project'
  return model(opts)
}
