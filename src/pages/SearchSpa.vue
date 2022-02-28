<template>
  <div class="search-spa">
    <Title color="black" tag="h1" :size="18" :weight="400">Привет</Title>
    <Title color="black" tag="h1" :size="36" :weight="400">Артур</Title>
    <Title color="black" tag="h1" :size="18" :weight="500">Диана</Title>
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
