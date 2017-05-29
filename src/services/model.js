// import Resource from 'vue-resource'
import {
  Fetch
} from 'vue-fetch'

import {
  doRequest
} from './do-request'

// Note: pass Vue.http in opts if using vue-resource
export function model(opts = {}) {
  let {
    http,
    host
  } = opts

  const $ = Fetch(opts)

  host = host || 'https://localhost:8080'
  let url = `${host}/${opts.name}`

  const findAll = async function (id) {
    await doRequest('findAll', async() => await $.fetch(`${url}/`), opts)
  }

  const findById = async function (id) {
    await doRequest('findById', async() => await $.fetch(`${url}/${id}`), opts)
  }

  const findByName = async function (name) {
    await doRequest('findById', async() => await $.fetch(`${url}/name/${name}`), opts)
  }

  const deleteById = async function (id) {
    await doRequest('deleteById', async() => await $.delete(`${url}/${id}`), opts)
  }

  const deleteByName = async function (name) {
    await doRequest('deleteById', async() => await $.delete(`${url}/name/${name}`), opts)
  }

  const createOrUpdate = async function (data) {
    await doRequest('createOrUpdate', async() => {
      let existingProject = await findById(data.id)
      request = existingProject.result ? update : create
      await request(data)
    })
  }

  const create = async function (data) {
    return await doRequest('create', async() => await $.post(`${url}/`, data), opts)
  }

  return {
    createOrUpdate,
    create,
    deleteById,
    findById,
    deleteByName,
    findByName,
    findAll, // for user?
  }
}
