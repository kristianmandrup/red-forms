<template>
  <md-menu>
    <md-button md-menu-trigger>Default</md-button>
  
    <md-menu-content>
      <md-menu-item>
        <router-link :to="{ name: 'user'}">User</router-link>
      </md-menu-item>
      <md-menu-item>
        <router-link :to="{ name: 'project'}">Project</router-link>
      </md-menu-item>
      <md-menu-item>
        <router-link :to="{ name: 'environment'}">Environment</router-link>
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</template>
<script>
export default {
  name: 'menu',
}
</script>

