import test from 'ava'
import {
  configure
} from '../'

import fetchMock from 'fetch-mock'

console.log({
  configure
})

// Testing REST (Fetch) endpoints
// http://www.wheresrhys.co.uk/fetch-mock/quickstart

const {
  $project
} = configure({
  logging: true
})

test('basic renders', async t => {
  t.pass()
})
