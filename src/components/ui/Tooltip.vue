<template>
  <div class="tooltip" :class="[`m-${modifier}`]">
    <p class="tooltip__text">{{ message }}</p>
    <Button :modifier="BUTTON_CONTENT.favorites.modifier"></Button>
  </div>
</template>

<script>

import {BUTTON_CONTENT} from "@/helpers/const.js"
import Button from "@/components/ui/Button"

export default {
  name: 'Tooltip',

  data() {
    return {
      BUTTON_CONTENT
    }
  },

  components: {
    Button

  },

  props: {
    message: {
      type: String,
      required: true
    },

    modifier: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  &.m-tooltip {
    width: 220px;
    height: 117px;
    background-size: cover;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 19px 15px;
  }

  &.m-tooltip p {
    font-family: Pt_sans, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #939393;
  }
}
</style>
