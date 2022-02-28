<template>
  <div class="card" :class="{'m-column':isRow}">
    <div class="card__img">
    </div>
    <div class="card__wrapper">
      <h1 class="card__title">{{ title }}</h1>
      <h1 class="card__subtitle">{{ subtitle }}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VideoCard',

  data() {
    return {
      isRow: true
    }
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    subtitle: {
      type: String,
      default: ''
    },

    watches: {
      type: String,
      default: ''
    },
  },

  components: {},
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  gap: 15px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
      gap: 20px;
    }
  }

  &__img {
    min-width: 120px;
    min-height: 72px;
    background-image: url("../assets/images/frame.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: 768px) {
      min-width: 158px;
      min-height: 88px;
    }
  }

  &__title,
  &__subtitle {
    font-family: var(--font-Roboto)
  }

  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-black);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-grey);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &.m-column {
    flex-direction: column;
    gap: 8px;

    .card__img {
      min-width: 0;
      min-height: 138px;
      width: 100%;
    }

    .card__wrapper {
      gap: 8px;
    }

    .card__subtitle {
      font-size: 14px;
      line-height: 16px;
    }
  }
}

</style>
