<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="header_search"></router-view>
    <router-view name="header_transparent"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="scss">

  @import "scss/project-comm.scss";

</style>