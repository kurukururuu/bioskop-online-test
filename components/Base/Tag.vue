<template>
  <button class="tag bg-blue-2"
    :class="classes">
    <div v-if="type === 'duration'" class="flex items-center px-3 py-2">
      <PlayIcon fill="#9BC7FD" :width="15" :height="15" class="mr-1" />
      <span class="text-blue-4">19 Menit</span>
    </div>
    <div v-else-if="type === 'rent'" class="flex items-center px-3 py-2">
      <ClockIcon fill="#9BC7FD" :width="15" :height="15" class="mr-1" />
      <span class="text-blue-4">Durasi penyewaan 48 jam</span>
    </div>
    <div v-else class="px-3 py-2">
      <span class="text-blue-4"><slot /></span>
    </div>
  </button>
</template>

<script>
import PlayIcon from '~/assets/icons/PathBG.svg?inline'
import ClockIcon from '~/assets/icons/ClockBG.svg?inline'

export default {
  components: {
    PlayIcon,
    ClockIcon
  },
  props: {
    type: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    classes() {
      switch (this.type) {
        case 'duration': {
          return 'font-bold'
        }
        case 'rent': {
          return 'font-semibold'
        }
        default: {
          return ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  border-radius: 50px;
  height: 30px;
  @apply text-xs;
}
</style>