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

test('find project', async t => {
  // expected result
  let result = {
    type: 'Project',
    status: 'found'
  }

  let response = {
    result
  }

  // what to delete via "fetch"
  let name = name: 'my-project'

  // fake response on any GET for simplicity
  fetchMock.get('*', response)

  const {
    $project
  } = configure({
    // logging: true,
    // fetch,
    Headers,
    createHeaders
  })

  let request = $project.findByName

  t.is(typeof request, 'function')

  let result = await request(name)
  let res = {
    status: result.status,
    statusText: result.statusText,
    json: await result.json()
  }

  t.deepEqual(res.json, response)
})
