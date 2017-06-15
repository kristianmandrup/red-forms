<template>
  <md-card md-primary md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Import Organisation</div>
        <div class="md-subhead">Import your organisation</div>
      </md-card-header-text>
    </md-card-header>

    <md-card-content>
      <md-input-container>
        <label>Name</label>
        <md-input id="name" v-model="name"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Description</label>
        <md-textarea id="description" v-model="description"></md-textarea>
      </md-input-container>

      <md-input-container>
        <label for="type">From</label>
        <md-select id="type" v-model="type">

          <md-option v-for="typ in types" :key="typ.id" :selected="typ.selected" :value="typ.value">{{ typ.label }}</md-option>
        </md-select>
      </md-input-container>

      <md-input-container>
        <label>Source</label>
        <md-input id="name" v-model="source"></md-input>
      </md-input-container>
    </md-card-content>

    <md-card-actions>
      <md-button>Import</md-button>
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
  name: 'organisationImport',
  data: function () {
    return {
      id: '123',
      name: '',
      description: '',
      source: '',
      type: '',
      types: [{
        value: 'github',
        label: 'github',
        selected: true
      }, {
        value: 'gitlab',
        label: 'gitlab'
      }, {
        value: 'bitbucket',
        label: 'bitbucket'
      }]
    }
  },
  methods: {
    formData() {
      return {
        name,
        description,
        type,
        source
      } = this
    },

    // call service to create organisation
    async save() {
      await services.$organisation.importFrom(this.formData())
    }
  }
}
</script>

<style>
.input-container label.inputs {
  font-size: 1.2em !important;
}
</style>
