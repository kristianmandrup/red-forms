import {
  model
} from './model'

export function environment(opts = {}) {
  opts.name = 'environment'
  return model(opts)
}
