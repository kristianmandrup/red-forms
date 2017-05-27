// import Resource from 'vue-resource'
import {
  Fetch as $
} from 'vue-fetch'

// Note: pass Vue.http in opts if using vue-resource
export default function (opts = {}) {
  const {
    http
  } = opts

  return {
    async createOrUpdate(data) {
      //
    },
    async create(data) {
      let result
      // res = await http.post('http://jsfiddle.net/echo/html/', {
      //   html: 'text'
      // }, {
      //   emulateJSON: true
      // })

      try {
        result = await $.post('/project', {
          username: 'somebody',
          password: 'wow',
        })
        if (res.status === 200) {
          return {
            result
          }
        }
      } catch (err) {

      }
    }
  }
}
