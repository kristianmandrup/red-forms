<template>
  <div id="app">
    <md-menu>
      <md-button md-menu-trigger>Default</md-button>
  
      <md-menu-content>
        <md-menu-item>
          <router-link to="/user">User</router-link>
        </md-menu-item>
        <md-menu-item>
          <router-link to="/project">Project</router-link>
        </md-menu-item>
        <md-menu-item>
          <router-link to="/environment">Environment</router-link>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  
    <md-card>
      <md-card-header>
        <div class="md-title">Node red for docker-gen</div>
        <div class="md-subhead">Building apps the smart way</div>
      </md-card-header>
      <md-card-content>
        <router-view></router-view>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      contacts: []
    }
  },
  methods: {
  }
}
</script>
<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
#app {
  text-align: center;
}
</style>
