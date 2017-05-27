<template>
  <div id="app">
    <nav id="menu">
      <router-link :to="{ name: 'user'}">User</router-link>
      <router-link to="/">Home</router-link>
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
}
</script>
