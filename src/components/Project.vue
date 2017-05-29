<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Project</div>
        <div class="md-subhead">Define your project details</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-input-container>
        <label>Name</label>
        <md-input id="name"
                  v-model="name"></md-input>
      </md-input-container>
  
      <md-input-container>
        <label>Type</label>
        <md-input id="type"
                  v-model="type"></md-input>
      </md-input-container>
  
      <div class="input-container">
        <label for="environments"
               class="inputs">Environments</label>
        <div id="environments"
             v-for="env in environments">
          <md-checkbox :id="env.id"
                       :value="env.value"
                       v-model="env.checked">{{ env.label }}</md-checkbox>
        </div>
      </div>
  
      <md-input-container>
        <label>Description</label>
        <md-textarea id="description"
                     v-model="description"></md-textarea>
      </md-input-container>
      <user-invite entity="project"
                   id="{{ id}}" />
    </md-card-content>
  
    <md-card-actions>
      <md-button @click="save()">Save</md-button>
      <md-button @click="clear()">Clear</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
// service
import { configure } from '../services'
const services = configure({
  // host:
})

import UserInvite from './Invite'

export default {
  name: 'project',
  components: {
    UserInvite
  },
  data: function () {
    return {
      id: '123',
      name: '',
      type: '',
      description: '',
      environments: [
        {
          id: 'dev',
          value: 'dev',
          label: 'development',
          checked: true
        },
        {
          id: 'test',
          value: 'test',
          label: 'testing',
          checked: false
        },
        {
          id: 'stage',
          label: 'staging',
          value: 'stage',
          checked: true
        }
      ]
    }
  },
  methods: {
    $data() {
      return {
        name,
        type,
        description,
        environments: $environments()
      } = this
    },

    $environments() {
      return this.environments.map((acc, env) => {
        if (env.checked) {
          acc[env.id] = env.value
        }
        return acc
      }, {})
    },
    clear() {
      console.log('clear')
    },
    // call service to create project
    save() {
      services.$project.createOrUpdate(this.$data())
    }
  }
}
</script>

<style>
.input-container label.inputs {
  font-size: 1.2em !important;
}
</style>
