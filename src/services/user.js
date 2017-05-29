import {
  model
} from './model'

export function user(opts = {}) {
  opts.name = 'user'
  return model(opts)
}
