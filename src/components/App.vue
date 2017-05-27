<template>
  <div id="app">
    <nav id="menu">
      <router-link :to="{ name: 'user'}">User</router-link>
      <router-link to="/project">Project</router-link>
    </nav>
    <section id="content">
      Router content here
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
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
