<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Invite</div>
        <div class="md-subhead">Add users to {{ entity }}</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-input-container>
        <label>Name</label>
        <md-input id="name"
                  v-model="name"></md-input>
      </md-input-container>
  
      <md-input-container>
        <label>Users</label>
        <md-textarea id="users"
                     v-model="users"></md-textarea>
      </md-input-container>
    </md-card-content>
  
    <md-card-actions>
      <md-button @click="save()">Invite</md-button>
      <md-button>Clear</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import { configure } from '../services'
const services = configure({
  // host:
})

export default {
  props: {
    entity: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true

    }
  },
  name: 'user',
  data: function () {
    return {
      name: '',
      // for now just uses text field. Ideally should be specialized input
      // adding list of valid emails to Array
      users: '',
    }
  },
  methods: {
    async save() {
      let users = this.users.split(',').map(usr => usr.trim())
      console.log('save')
      let serviceName = `$${entity}`
      let service = services[serviceName]
      if (!service) {
        throw Error(`No such service: ${serviceName}`)
      }

      // users should contain list of emails
      let result = await service.invite({
        users,
        id: this.id,
      })
    }
  }
}
</script>

<style>

</style>
