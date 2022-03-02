<template>
  <div class="app">
    <router-link to="/">home</router-link>
    <router-link to="/login">login</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "assets/styles/main.css";
</style>
