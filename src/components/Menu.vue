<template>
  <md-menu>
    <md-button md-menu-trigger>Manage</md-button>
    <md-menu-content>
      <md-menu-item @selected="display('organisations')">Organisations</md-menu-item>
      <md-menu-item @selected="display('teams')">Teams</md-menu-item>
      <md-menu-item @selected="display('users')">Users</md-menu-item>
      <md-menu-item @selected="display('projects')">Projects</md-menu-item>
      <md-menu-item @selected="display('environments')">Environments</md-menu-item>
      <md-menu-item @selected="display('repos')">Repositories</md-menu-item>
    </md-menu-content>
  </md-menu>
</template>
<script>
export default {
  name: 'menu',
  methods: {
    display(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

