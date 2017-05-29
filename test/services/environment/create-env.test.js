import test from 'ava'
// import 'isomorphic-fetch'
import {
  configure
} from '../'
import fetchMock from 'fetch-mock'

import fetcher from 'fetch-ponyfill'
const {
  fetch,
  Request,
  Response,
  Headers
} = fetcher({})

// mock-fetch-api

// console.log({
//   configure
// })


function createHeaders(obj) {
  return obj
}
// Testing REST (Fetch) endpoints
// http://www.wheresrhys.co.uk/fetch-mock/quickstart

test.afterEach(done => {
  fetchMock.restore();
})

test('create environment', async t => {
  // expected result
  let result = {
    type: 'Env',
    status: 'created'
  }

  let response = {
    result
  }

  // what to "fetch"
  let data = {
    name: 'my-project'
  }

  // fake response on any post for simplicity
  fetchMock.post('*', response)

  const {
    $project
  } = configure({
    // logging: true,
    // fetch,
    Headers,
    createHeaders
  })


  t.is(typeof $project.create, 'function')

  let created = await $project.create(data)
  let res = {
    status: created.status,
    statusText: created.statusText,
    json: await created.json()
  }

  t.deepEqual(res.json, response)
})
