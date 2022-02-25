<template>
  <div class="search-spa">
    <Tooltip :modifier="TOOLTIP_CONTENT.modifier" :message="TOOLTIP_CONTENT.message"></Tooltip>
  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip"
import {TOOLTIP_CONTENT} from "@/helpers/const.js"

export default {
  name: 'SearchSpa',

  data() {
    return {
      TOOLTIP_CONTENT
    }
  },

  components: {Tooltip},
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
