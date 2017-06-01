<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Branch</div>
        <div class="md-subhead">Define your branch details</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-input-container>
        <label>Name</label>
        <md-input id="name"
                  v-model="name"></md-input>
      </md-input-container>
  
      <md-input-container>
        <label for="type">Type</label>
        <md-select id="type"
                   v-model="type">
  
          <md-option v-for="typ in types"
                     :key="typ.id"
                     :selected="typ.selected"
                     :value="typ.value">{{ typ.label }}</md-option>
        </md-select>
      </md-input-container>
  
      <md-input-container>
        <label>Repo</label>
        <md-select id="repo"
                   v-model="type">
  
          <md-option v-for="repo in repos"
                     :key="repo.id"
                     :selected="repo.selected"
                     :value="repo.value">{{ repo.label }}</md-option>
        </md-select>
      </md-input-container>
  
      <md-input-container>
        <label>Description</label>
        <md-textarea id="description"
                     v-model="description"></md-textarea>
      </md-input-container>
    </md-card-content>
  
    <md-card-actions>
      <md-button>Save</md-button>
      <md-button>Clear</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import { configure } from '../../services'
const services = configure({
  // host:
})

export default {
  name: 'branch',
  data: function () {
    return {
      name: '',
      location: '',
      description: '',
      type: '',
      types: [{
        value: 'test',
        label: 'test',
        selected: true
      }, {
        value: 'develop',
        label: 'develop'
      }],
      repo: '',
      repos: [{
        value: 'github:tecla5/cms',
        label: 'old cms',
        selected: true
      }, {
        value: 'github:tecla5/dock-me-up',
        label: 'dock me up'
      }],
    }
  },
  created() {
    let name = 'branch'
    this.service = services[name]
  },
  methods: {
    formData() {
      return {
        name,
        type,
        repo,
        description
      } = this
    },

    // call service to create organisation
    async save() {
      await this.service.createOrUpdate(this.formData())
    }
  }
}
</script>

<style>

</style>
