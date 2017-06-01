import TestResource from 'supply/test-resource'

export default {
  // Use the supply data in getters
  'my-getter': () => TestResource.someData,
}
