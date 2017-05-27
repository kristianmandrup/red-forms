<template>
  <div id="app">
    <div class="content">
      Content here
      <router-link :to="{ name: 'user'}">User</router-link>
      <router-view></router-view>
    </div>
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
