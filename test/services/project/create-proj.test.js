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

test('create project', async t => {
  // expected result
  let expected = {
    result: {
      type: 'Project',
      status: 'created'
    }
  }

  let response = {
    result
  }

  // what to POST via "fetch"
  let data = {
    name: 'my-project'
  }

  // fake response on any POST for simplicity
  fetchMock.post('*', response)

  const {
    $project
  } = configure({
    // logging: true,
    // fetch,
    Headers,
    createHeaders
  })

  let request = $project.create

  t.is(typeof request, 'function')

  let result = await request(data)
  let res = {
    status: result.status,
    statusText: result.statusText,
    json: await result.json()
  }

  t.deepEqual(res.json, response)
})
