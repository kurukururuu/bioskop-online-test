<template>
  <div class="mb-4">
    <label>
      <div class="text-white text-xs opacity-50">{{ label }}</div>
      <select v-bind="$attrs" :type="$attrs.type" class="w-full border-b border-gray-400 bg-transparent focus:outline-none text-white font-bold text-sm placeholder-gray-500">
        <option v-for="(item, i) in options" :key="i" :value="item" class="bg-blue-1 focus:outline-none text-white text-sm">{{ item }}</option>
      </select>
      <div class="text-xxs opacity-50 text-white">{{ $props.helperText }}</div>
    </label>
  </div>
</template>

<script>
export default {
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
    options: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {}
  }
}
</script>