<template>
  <md-menu>
    <md-button md-menu-trigger>Manage</md-button>
    <md-menu-content>
      <md-menu-item>
        <md-button @click.native="$router.push({ name: 'user'})">User</md-button>
        </md-button>
      </md-menu-item>
      <md-menu-item>
        <md-button @click.native="$router.push({ name: 'project'})">Project</md-button>
        </md-button>
      </md-menu-item>
      <md-menu-item @selected="$router.push({ name: 'environment'})">Environment</md-menu-item>
    </md-menu-content>
  </md-menu>
</template>
<script>
export default {
  name: 'menu',
}
</script>

