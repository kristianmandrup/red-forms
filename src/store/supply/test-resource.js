import Vue from 'vue'
import {
  Supply
} from 'vue-supply'

export default new Vue({
  extends: Supply,
  data() {
    return {
      someData: null,
    }
  },
  methods: {
    activate() {
      console.log('subscribing...')
      // Use the integer `loading` property
      // 0 mean ready
      this.loading++
        // Faking a server request here :p
        setTimeout(() => {
          this.someData = 42
          this.loading--
        }, 1000)
    },
    deactivate() {
      console.log('unsubscribing...')
    },
  },
})
