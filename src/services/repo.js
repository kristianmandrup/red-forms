import {
  model,
} from './model'

export function repo(opts = {}) {
  opts.name = 'repo'
  return model(opts)
}
