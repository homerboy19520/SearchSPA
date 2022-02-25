<template>
  <div class="logo" v-bind:style="{ width: this.width + 'px', height: this.height + 'px' }">
    <slot></slot>
  </div>
</template>


<script>

export default {
  name: 'Logo',

  props: {
    width: {
      type: String,
      required: true,
    },

    height: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  line-height: 0;

  & svg {
    width: 100%;
    height: 100%;
  }
}
</style>
