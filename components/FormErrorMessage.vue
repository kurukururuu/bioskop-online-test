<template>
  <div v-if="!!data" class="flex items-center p-2 bg-red-secondary bg-opacity-20 border-red-secondary border-opacity-50 rounded-lg mb-6">
    <ErrorIcon width="20" height="20" class="mr-1" />
    <div>
      <div class="text-xxs font-bold">{{ data.title }}</div>
      <div class="text-2xxs text-gray-400">{{ data.subtitle }}</div>
    </div>
  </div>
</template>

<script>
import ErrorIcon from '~/assets/icons/ErrorWarning.svg?inline'

export default {
  components: {
    ErrorIcon
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>