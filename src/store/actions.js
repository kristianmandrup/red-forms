import {
  consume
} from 'vue-supply'
import TestResource from 'supply/test-resource'

export default {
  'subscribe-action' () {
    // Request usage in the store
    // Ex: subscribing to a Meteor publication
    TestResource.grasp()
  },

  'unsubscribe-action' () {
    // No longer used in the store
    // Ex: unsubscribing from a publication
    TestResource.release()
  },

  async 'consume-action' ({
    commit
  }) {
    // This will wait for the supply to be 'ready'
    const release = await consume(TestResource)
    // Count of active supply consumers
    console.log('consumers', TestResource.consumers)
    commit('my-commit', TestResource.someData)
    // When you are done with the supply, release it
    release()
  }
}
