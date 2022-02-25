<template>
  <div class="search-spa">
    <Header></Header>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name: 'SearchSpa',

  data() {
    return {}
  },

  components: {Header},
}
</script>

<style>
.search-spa {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}

</style>
