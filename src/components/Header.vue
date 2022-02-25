<template>
  <header class="header">
    <Logo width="48" height="48">
      <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M59.1487 43.5668L24.683 60.956V79.3991L59.1487 62.0099V43.5668Z" fill="#1390E5"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M24.6831 26.1787L59.1488 43.5679V62.0111L24.6831 44.6218V26.1787Z" fill="#1180CB"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M59.1487 8.79065L24.683 26.1799V44.623L59.1487 27.2338V8.79065Z" fill="#35A2EC"/>
      </svg>

    </Logo>
    <div class="header__list">
      <Button v-for="(item,index) in layouts" :key="index" :modifier="item.modifier" :active="item.active"
              :content="item.content" @onButton="onButton(index)"></Button>
    </div>
  </header>
</template>

<script>

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import {BUTTON_CONTENT} from "@/helpers/const.js";

export default {
  name: 'Header',
  components: {Button, Logo},
  data() {
    return {
      BUTTON_CONTENT,
      layouts: BUTTON_CONTENT.text,
    }
  },

  methods: {
    onButton(index) {
      this.layouts.forEach((item) => {
        item.active = false
      })
      this.layouts[index].active = true
    }
  }
}
</script>


<style lang="scss" scoped>
.header {
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 40px;
    gap: 20px;
  }

  @media (min-width: 1440px) {
    padding: 0 200px;

  }

  &__list {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
