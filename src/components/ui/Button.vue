<template>
  <button @click="onButton" class="button" :class="[`m-${modifier}`]">
    <slot>Перейти в избранное</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {

    modifier: {
      type: String,
      required: true
    }
  },

  methods: {
    onButton() {
      this.$emit("onButton")
    }
  }
}
</script>


<style lang="scss">
.button {
  box-sizing: border-box;
  font-weight: 400;
  font-family: var(--font-Roboto);
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  &.m-primary {
    min-width: 136px;
    background-color: #1390E5;
    padding: 14px 20px;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 10px;
    transition: background-color .2s ease-out, color .2s ease-out, border-color .2s ease-out;

    &:hover {
      background-color: #fff;
      color: #1390E5;
      border-color: #1390E5;;
    }
  }

  &.m-text,
  &.m-favorites {
    padding: 10px;
    color: #1390E5;
    transition: opacity .2s ease-out;

    &:hover {
      opacity: .5;
    }
  }

  &.m-favorites {
    padding-left: 0;
  }

  &.m-secondary {
    min-width: 136px;
    background-color: transparent;
    padding: 14px 20px;
    color: #1390E5;
    border: 1px solid #1390E5;
    border-radius: 10px;
    transition: background-color .2s ease-out, color .2s ease-out, border-color .2s ease-out;

    &:hover {
      background-color: #1390E5;
      color: #fff;
      border-color: transparent;
    }
  }

  &.m-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .2s ease-out;

    &:hover {
      opacity: .5;
    }
  }
}
</style>
