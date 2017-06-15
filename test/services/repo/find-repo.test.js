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

test('find repo', async t => {
  // expected result
  let expected = {
    result: {
      type: 'Repo',
      status: 'found'
    }
  }

  let response = {
    result
  }

  // what to find via "fetch"
  let name = 'my-repo'

  // fake response on any GET for simplicity
  fetchMock.get('*', response)

  const {
    $repo
  } = configure({
    // logging: true,
    // fetch,
    Headers,
    createHeaders
  })

  let request = $repo.findByName

  t.is(typeof request, 'function')

  let result = await request(name)
  let res = {
    status: result.status,
    statusText: result.statusText,
    json: await result.json()
  }

  t.deepEqual(res.json, response)
})
