<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">User</div>
        <div class="md-subhead">Define your user details</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-input-container>
        <label>Name</label>
        <md-input id="name"
                  v-model="name"></md-input>
      </md-input-container>
  
      <md-input-container>
        <label for="role">Role</label>
        <md-select id="role"
                   v-model="role">
          <md-option v-for="role in roles"
                     :key="role.id"
                     :value="role.value">{{ role.label }}</md-option>
        </md-select>
      </md-input-container>
  
      <div class="input-container">
        <label for="projects"
               class="inputs">Projects</label>
        <div id="projects"
             v-for="proj in form.projects">
          <md-checkbox :id="proj.id"
                       :value="proj.value"
                       v-model="proj.checked">{{ proj.label }}</md-checkbox>
        </div>
      </div>
  
      <md-input-container>
        <label>Add project</label>
        <md-input id="add-branch"
                  v-model="location"></md-input>
        <md-button @click.native="addProject()"
                   class="md-icon-button md-raised">
          <md-icon class="md-primary">add</md-icon>
        </md-button>
  
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
  name: 'user',
  data: function () {
    return {
      name: '',
      description: '',
      role: '',
      roles: [{
        id: 'admin',
        label: 'administrator',
        value: 'admin'
      }, {
        id: 'dev',
        label: 'developer',
        value: 'developer'
      }],
      form: {
        projects: [
          {
            id: '123',
            value: 'my-proj',
            label: 'my project',
            checked: true
          },
          {
            id: '678',
            value: 'hobby-proj',
            label: 'my hobby project',
            checked: true
          }
        ]
      }
    }
  },
  methods: {
    formData() {
      return {
        name,
        role,
        description
      } = this
    },
    async save() {
      await services.$user.createOrUpdate(this.formData())
    }
  }
}
</script>

<style>

</style>
