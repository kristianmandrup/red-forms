<template>
  <md-menu>
    <md-button md-menu-trigger>Manage</md-button>
    <md-menu-content>
      <md-menu-item @selected="$router.push({ name: 'organisations'})">Organisations</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'users'})">Users</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'projects'})">Projects</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'environments'})">Environments</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'repos'})">Repos</md-menu-item>
    </md-menu-content>
  </md-menu>
</template>
<script>
export default {
  name: 'menu',
}
</script>

