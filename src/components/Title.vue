<template>
  <h1 class="title" :class="[`m-${modifier}`]">{{ content }}</h1>
</template>

<script>

export default {
  name: 'Title',
  props: {
    modifier: {
      type: String,
      default: "",
    },

    content: {
      type: String,
      default: "",
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  &.m-signIn,
  &.m-search,
  &.m-save,
  {
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  &.m-save {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }

  &.m-search {
    font-weight: 400;
    font-size: 36px;
    line-height: 52px;
    color: #000000;
  }

  &.m-signIn {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }
}
</style>
