<template>
  <div class="input-wrapper">
    <span class="input-description" v-if="description">{{ description }}</span>
    <div class="input__container">
      <input class="input" :class="[`m-${modifier}`]" :placeholder="placeholder" @click="onInput"/>
      <slot></slot>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Input',

  data() {
    return {}
  },

  props: {
    description: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    modifier: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput() {
      this.$emit("onInput")
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 1px solid var(--color-blue);;
  outline: none;
  font-family: var(--font-Roboto);

  &.m-common,
  &.m-search {
    font-weight: 400;
    color: var(--color-black);
    font-size: 20px;
    line-height: 24px;
    border: 1px solid var(--color-grey);
    border-radius: 10px;
    padding: 12px 15px;
    transition: border-color .2s ease-out, background-color .2s ease-out;

    &::placeholder {
      font-weight: 400;
      color: var(--color-grey);
      font-size: 20px;
      line-height: 24px;
      transition: opacity .2s ease-out;
    }

    &:focus {
      border-color: var(--color-blue);
      background-color: #C5E4F9;
    }

    &:focus::placeholder {
      opacity: 0;
    }
  }

  &__container {
    position: relative;
  }

  &__container svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-16px, -50%);
    cursor: pointer;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-description {
  font-family: var(--font-family-roboto);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--color-grey);
}
</style>
