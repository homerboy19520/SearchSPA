<template>
  <div class="app">
    <SearchSpa></SearchSpa>
  </div>
</template>

<script>
import SearchSpa from './pages/SearchSpa.vue'

export default {
  name: 'App',

  components: {
    SearchSpa
  }
}
</script>

<style lang="scss">
@import "assets/styles/styles.css";
</style>
