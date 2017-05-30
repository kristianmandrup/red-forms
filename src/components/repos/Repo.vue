<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Repository</div>
        <div class="md-subhead">Define your repository details</div>
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
        <label>Location</label>
        <md-input id="location"
                  v-model="location"></md-input>
      </md-input-container>
  
      <div class="input-container">
        <label for="environments"
               class="inputs">Branches</label>
        <div id="environments"
             v-for="env in form.branches">
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
      location: '',
      type: '',
      types: [{
        value: 'github',
        label: 'github',
        selected: true
      }, {
        value: 'gitlab',
        label: 'gitlab'
      }
      ],
      description: '',
      form: {
        branches: [
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
    }
  },
  methods: {
    formData() {
      this.branches = this.selectedBranches()
      return {
        name,
        location,
        branches,
        description
      } = this
    },

    selectedBranches() {
      return this.form.branches.map((acc, env) => {
        if (env.checked) {
          acc[env.id] = env.value
        }
        return acc
      }, {})
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
