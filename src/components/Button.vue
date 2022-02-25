<template>
  <button @click="onButton" class="button" :class="[`m-${modifier}`, {'m-active': active}]">
    {{ content }}
    <slot></slot>
  </button>
</template>
<script>

export default {
  name: 'Button',
  data() {
    return {}
  },
  props: {

    modifier: {
      type: String,
      required: true
    },

    active: {
      type: Boolean,
      default: false
    },

    content: {
      type: String,
      default: ""
    }
  },

  methods: {
    onButton() {
      this.$emit("onButton")
    }
  },

}
</script>


<style lang="scss">
.button {
  box-sizing: border-box;
  font-weight: 400;
  font-family: Roboto, Helvetica, Arial, sans-serif;
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
  &.m-exit {
    position: relative;
    padding: 25px 12px;
    color: #BEBEBE;
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    transition: color .2s ease-out, opacity .2s ease-out;

    &:hover {
      opacity: .7;
    }


    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 0;
      height: 2px;
      background-color: var(--color-blue);
      transition: width .2s ease-out;
    }

    &.m-active {
      color: #1390E5;

      &:after {
        width: 100%;
      }
    }

    @media (min-width: 768px) {
      font-size: 18px;
      padding: 26px 20px;
    }
  }

  &.m-exit {
    margin-left: auto;
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
