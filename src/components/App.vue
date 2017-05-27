<template>
  <div id="app">
    <nav id="menu">
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
          <md-menu-item>
            <md-button @click.native="$router.push({ name: 'environment'})">Environment</md-button>
            </md-button>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
    </nav>
    <section id="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import TopMenu from './Menu'

export default {
  components: {
    TopMenu
  },
  name: 'app',
}
</script>
