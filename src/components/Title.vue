<script>
export default {
  name: 'Title',
  props: {
    size: {
      type: Number,
      default: 14
    },
    weight: {
      type: Number,
      default: 400
    },
    color: {
      type: String,
      default: 'brand'
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      return [
        'title',
        `m-${this.size}`,
        `m-${this.weight}`,
        `m-${this.color}`
      ]
    }
  },
  render(createElement) {
    return createElement(
        this.tag,
        {
          class: this.classes,
          on: {
            click: (ev) => this.$emit('click', ev)
          }
        },
        this.$slots.default
    )
  }
}

</script>

<style lang="scss" scoped>
.title {
  font-family: Roboto, Helvetica, Arial, sans-serif;

  &.m-18 {
    font-size: 18px;
    line-height: 28px;
  }

  &.m-36 {
    font-size: 36px;
    line-height: 52px;
  }

  &.m-500 {
    font-weight: 500;
  }

  &.m-400 {
    font-weight: 400;
  }

  &.m-black {
    color: var(--color-black);
  }

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
