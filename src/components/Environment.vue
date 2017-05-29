<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Environment</div>
        <div class="md-subhead">Define your environment details</div>
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
                     :value="typ.value">{{ typ.label }}</md-option>
        </md-select>
      </md-input-container>
  
      <md-input-container>
        <label for="branch">Branch</label>
        <md-select id="branch"
                   v-model="branch">
  
          <md-option v-for="branch in branches"
                     :key="branch.id"
                     :value="branch.value">{{ branch.label }}</md-option>
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
export default {
  name: 'project',
  data: function () {
    return {
      name: '',
      type: '',
      types: [{
        value: 'dev',
        label: 'development'
      }, {
        value: 'test',
        label: 'testing'
      }
      ],
      description: '',
      branch: '',
      branches: [
        {
          id: 'dev',
          value: 'dev',
          label: 'experiments'
        },
        {
          id: 'test',
          value: 'test',
          label: 'my-testing'
        }]
    }
  },
  methods: {
    formData() {
      return {
        name,
        branch,
        type,
        description
      } = this
    },

    // call service to create organisation
    async save() {
      await services.$environment.createOrUpdate(this.formData())
    }
  }
}
</script>

<style>

</style>
