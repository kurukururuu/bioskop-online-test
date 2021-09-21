<template>
  <div class="mb-4">
    <label>
      <div class="text-white text-xs opacity-50">{{ label }}</div>
      <template v-if="password">
        <div class="relative">
          <input
            :value="$attrs.value"
            :type="hidePassword ? 'password' : 'text'"
            autocomplete="off"
            class="w-full border-b border-gray-400 bg-transparent focus:outline-none text-white font-bold text-sm placeholder-gray-500"
            @focus="$emit('focus')"
            @change="e => $emit('change', e)" />
          <div class="absolute top-0 right-0 h-full flex items-center justify-center mr-1 text-white" @click="hidePassword = !hidePassword">
            <EyeHideIcon v-if="hidePassword" :width="20" :height="20" />
            <EyeIcon v-else :width="20" :height="20" fill="white" />
          </div>
        </div>
      </template>
      <template v-if="radio">
        <div class="relative radio-container">
          <input
            type="radio"
            v-bind="$attrs"
            class="w-full border-b border-gray-400 bg-transparent focus:outline-none text-white font-bold text-sm placeholder-gray-500"
            @focus="$emit('focus')"
            @change="e => $emit('change', e)" />
          <span class="radio" />
        </div>
      </template>
      <template v-else>
        <div class="relative">
          <input
            v-bind="$attrs"
            :type="$attrs.type"
            class="w-full border-b border-gray-400 bg-transparent focus:outline-none text-white font-bold text-sm placeholder-gray-500"
            @focus="$emit('focus')"
            @change="e => $emit('change', e)" />
          <div class="absolute top-0 right-0 h-full flex items-center justify-center mr-1 text-white">
            <slot name="post-icon" />
          </div>
        </div>
      </template>
      <div class="text-xxs opacity-50 text-white">{{ $props.helperText }}</div>
    </label>
  </div>
</template>

<script>
import EyeIcon from '~/assets/icons/Eye.svg?inline'
import EyeHideIcon from '~/assets/icons/EyeHide.svg?inline'

export default {
  components: {
    EyeIcon,
    EyeHideIcon
  },
  props: {
    label: {
      type: String,
      default() {
        return 'Title'
      }
    },
    helperText: {
      type: String,
      default() {
        return null
      }
    },
    password: {
      type: Boolean,
      default() {
        return false
      }
    },
    radio: {
      type: Boolean,
      default() {
        return false
      }
    },
  },
  data() {
    return {
      hidePassword: true
    }
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

.radio-container {
  .radio {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    // background-color: #eee;
    border-radius: 50%;
    @apply cursor-pointer;
    @apply bg-blue-4 bg-opacity-50;

    &::after {
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }

  input {
    &:checked ~ .radio {
      @apply bg-blue-4;
      &::after {
        @apply block;
      }
    }
    @apply absolute opacity-0 cursor-pointer;
  }

  &:hover {
    input {
      &~ .radio {
        @apply bg-opacity-100;
      }
    }
  }
}

:not(.radio-container) {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: white !important;
  }
}
</style>