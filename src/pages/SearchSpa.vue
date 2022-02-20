<template>
  <div class="search-spa">
    <Button :modifier="BUTTON_CONTENT.primary.save.modifier"
            :content="BUTTON_CONTENT.primary.save.content"/>
    <Button :modifier="BUTTON_CONTENT.primary.signIn.modifier"
            :content="BUTTON_CONTENT.primary.signIn.content"/>

    <Button :modifier="BUTTON_CONTENT.text.exit.modifier"
            :content="BUTTON_CONTENT.text.exit.content"/>
    <Button :modifier="BUTTON_CONTENT.text.favorites.modifier"
            :content="BUTTON_CONTENT.text.favorites.content"/>
    <Button :modifier="BUTTON_CONTENT.text.search.modifier"
            :content="BUTTON_CONTENT.text.search.content"/>

    <Button :modifier="BUTTON_CONTENT.secondary.modifier"
            :content="BUTTON_CONTENT.secondary.content"/>
  </div>
</template>

<script>

import Button from "@/components/Button";
import {BUTTON_CONTENT} from "@/helpers/const"


export default {
  name: 'SearchSpa',

  data() {
    return {
      BUTTON_CONTENT
    }
  },

  components: {Button},
}
</script>

<style>
.search-spa {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>
