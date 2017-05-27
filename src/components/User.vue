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
      type: '',
      description: '',
      role: '',
      roles: [{
        id: 'admin',
        label: 'admin',
        value: 'admin'
      }],
      environments: [
        {
          id: 'dev',
          value: 'dev',
          label: 'development'
        },
        {
          id: 'test',
          value: 'test',
          label: 'testing'
        },
        {
          id: 'stage',
          label: 'staging',
          value: 'stage'
        }
      ]
    }
  },
  methods: {
    save() {
      console.log('save')
    }
  },
  ready: function () {
    console.log('User component ready')
  },
  route: {
    activate() {
      this.$nextTick(function () {
        console.log('Activated User component for route')
      })
    }
  }
}
</script>

<style>

</style>
