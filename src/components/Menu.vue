<template>
  <md-menu>
    <md-button md-menu-trigger>Manage</md-button>
    <md-menu-content>
      <md-menu-item @selected="$router.push({ name: 'organisation'})">Organisation</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'user'})">User</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'repo'})">Repo</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'repos'})">Repos</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'project'})">Project</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'projects'})">Projects</md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'environment'})">Environment</md-menu-item>
    </md-menu-content>
  </md-menu>
</template>
<script>
export default {
  name: 'menu',
}
</script>

