<template>
  <div class="search-spa">
    <Title :modifier="TITLE_CONTENT.signIn.modifier" :content="TITLE_CONTENT.signIn.content"></Title>
    <Title :modifier="TITLE_CONTENT.search.modifier" :content="TITLE_CONTENT.search.content"></Title>
    <Title :modifier="TITLE_CONTENT.save.modifier" :content="TITLE_CONTENT.save.content"></Title>
  </div>
</template>

<script>
import Title from "@/components/Title"
import {TITLE_CONTENT} from "@/helpers/const"

export default {
  name: 'SearchSpa',

  data() {
    return {
      TITLE_CONTENT
    }
  },

  components: {Title},
}
</script>

<style>
.search-spa {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

</style>
