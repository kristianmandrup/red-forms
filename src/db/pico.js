import PicoDB from 'picodb'
import pify from 'pify'
const db = PicoDB.Create()

const methods = [
  'insertOne',
  'insertMany',
  'updateOne',
  'updateMany',
  'deleteOne',
  'deleteMany',
  'count',
  'find'
]

// wrap node style callbacks as native Promises
const promiseDb = methods.map(fun => pify(fun))
export default promiseDb
