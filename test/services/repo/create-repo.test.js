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

test('create repo', async t => {
  // expected result
  let result = {
    type: 'Repo',
    status: 'created'
  }

  let response = {
    result
  }

  // what to POST via "fetch"
  let data = {
    name: 'my-repo'
  }

  // fake response on any POST for simplicity
  fetchMock.post('*', response)

  const {
    $repo
  } = configure({
    // logging: true,
    // fetch,
    Headers,
    createHeaders
  })

  let request = $repo.create

  t.is(typeof request, 'function')

  let result = await request(data)
  let res = {
    status: result.status,
    statusText: result.statusText,
    json: await result.json()
  }

  t.deepEqual(res.json, response)
})
