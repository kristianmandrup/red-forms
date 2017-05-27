<template>
  <h1>Baby I'm HOME...</h1>
</template>
<script>
export default {
  name: 'home',
  mounted: function () {
    this.$nextTick(function () {
      console.log('Simple component ready')
    })
  },
  route: {
    activate() {
      this.$nextTick(function () {
        console.log('Activated Home component for route')
      })
    }
  }
}
</script>
