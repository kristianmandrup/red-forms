<template>
  <div id="app">
    <nav id="menu">
      <top-menu/>
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
