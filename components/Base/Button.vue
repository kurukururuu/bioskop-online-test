<template>
  <button
    :class="classes"
    class="flex items-center justify-center py-3"
    >
      <slot name="pre-icon"></slot>
      <span class="font-bold"><slot /></span>
      <slot name="post-icon"></slot>
    </button>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default () {
        return false
      }
    },
    size: {
      type: String,
      default () {
        return null
      }
    }
  },
  computed: {
    classes() {
      const classes = []

      if (this.dark) {
        classes.push('bg-blue-2')
        classes.push('text-blue-4')
      } else {
        classes.push('bg-blue-4')
        classes.push('text-blue-1')
      }

      switch (this.size) {
        case 'small': {
          classes.push('small')
          classes.push('text-button-small')
          break
        }
        case 'long': {
          classes.push('long')
          classes.push('text-button')
          break
        }
        case 'default':
        default: {
          classes.push('text-button')
        }
      }

      return classes.join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    border-radius: 50px;
    width: 150px;
    height: 46px;
    &.small {
      width: 92px;
      height: 36px;
    }
    &.long {
      width: 340px;
    }
  }
</style>