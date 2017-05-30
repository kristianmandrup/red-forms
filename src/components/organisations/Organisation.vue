<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Organisation</div>
        <div class="md-subhead">Define your organisation details</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-input-container>
        <label>Name</label>
        <md-input id="name"
                  v-model="name"></md-input>
      </md-input-container>
  
      <md-input-container>
        <label>Description</label>
        <md-textarea id="description"
                     v-model="description"></md-textarea>
      </md-input-container>
      <user-invite entity="project"
                   :id="id" />
  
    </md-card-content>
  
    <md-card-actions>
      <md-button>Save</md-button>
      <md-button>Clear</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
// service
import { configure } from '../../services'
const services = configure({
  // host:
})

export default {
  name: 'organisation',
  data: function () {
    return {
      id: '123',
      name: '',
      description: '',
    }
  },
  methods: {
    formData() {
      return {
        name,
        description
      } = this
    },

    // call service to create organisation
    async save() {
      await services.$organisation.createOrUpdate(this.formData())
    }
  }
}
</script>

<style>
.input-container label.inputs {
  font-size: 1.2em !important;
}
</style>
