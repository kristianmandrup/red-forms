<template>
  <h1>Simply...</h1>
</template>
<script>
export default {
  name: 'simple',
  ready: function () {
    console.log('Simple component ready')
  },
  route: {
    activate() {
      this.$nextTick(function () {
        console.log('Activated Simple component for route')
      })
    }
  }
}
</script>
