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
} = configure()

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

  t.is(typeof $project.create, 'function')

  let created = await $project.create(data)

  t.deepEqual(created, response)
})
