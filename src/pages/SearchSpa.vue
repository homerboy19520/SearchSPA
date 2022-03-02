<template>
  <div class="search-spa">
    <VideoCard :title="title" :subtitle="subtitle" :watches="watches"></VideoCard>
  </div>
</template>

<script>

import VideoCard from "@/components/VideoCard";

export default {
  name: 'SearchSpa',

  data() {
    return {
      title: "Как кормить кошку натуралкой | Перечень Как кормить кошку натуралкой | Перечень",
      subtitle: "Ветеринария и Кормление Ветеринария и Кормление",
      watches: "786 тыс. просмотров"
    }
  },

  components: {VideoCard},
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
