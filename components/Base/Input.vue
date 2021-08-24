<template>
  <div class="mb-4">
    <label>
      <div class="text-white text-xs opacity-50">{{ label }}</div>
      <!-- <template v-if="$attrs.type === 'password'">
        <div class="relative">
          <input v-bind="$attrs"
            :type="hidePassword ? 'password' : 'text'"
            autocomplete="off"
            class="border-b border-gray-400 bg-transparent focus:outline-none text-white font-bold text-sm placeholder-gray-500" />
          <div class="absolute top-0 right-0 h-full flex items-center justify-center mr-2 text-white" @click="hidePassword = !hidePassword">
            P
          </div>
        </div>
      </template>
      <template v-else> -->
        <input v-bind="$attrs" :type="$attrs.type" class="border-b border-gray-400 bg-transparent focus:outline-none text-white font-bold text-sm placeholder-gray-500" />
      <!-- </template> -->
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
    }
  },
  data() {
    return {
      hidePassword: true
    }
  }
}
</script>