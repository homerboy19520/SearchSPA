<template>
  <button class="button" :class="[`m-${modifier}`]">
    {{ content }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    content: {
      type: String,
      required: true
    },

    modifier: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
