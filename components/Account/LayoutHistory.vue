<template>
  <div class="text-white layout-history-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" />
      <div class="text-xl font-bold mobile:text-lg">Riwayat Pembayaran</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
    </div>
    
    <div class="border border-opacity-20 w-full my-5 desktop:hidden"></div>

    <div v-for="(item, i) in list" :key="i">
      <AccountHistoryItem :data="item" />
      <div class="border border-opacity-20 w-full my-5"></div>
    </div>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    ChevronRight,
    XIcon
  },
  computed: {
    list() {
      return [
        {status: 'pending'},
        {status: 'expired'},
        {status: 'success'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-history-wrapper {
    width: 500px;
    @apply p-8 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-history-wrapper {
    width: 100%;
  }
}
</style>