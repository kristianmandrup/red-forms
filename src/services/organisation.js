import {
  model
} from './model'

export function organisation(opts = {}) {
  opts.name = 'organisation'
  return model(opts)
}
