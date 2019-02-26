<template>
  <div>
    <h1>{{ message }}</h1>
    <app-server-status></app-server-status>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: 'Hello There!'
      }
    }
  }
</script>

<style lang="scss">
</style>
