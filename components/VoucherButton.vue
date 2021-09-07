<template>
  <button class="text-button">
    <div v-if="!!data"
      class="bg-blue-2 h-12 text-white border border-blue-3 hover:border-blue-4 flex items-center justify-between w-full px-5 py-3"
      :class="data ? 'rounded-full' : 'rounded-lg'">
      <span class="text-sm font-bold">{{voucherData.code}}</span>
      <ArrowCircleRight fill="white" :width="20" :height="20" />
    </div>
    <div v-else
      class="bg-blue-2 h-12 text-white border border-blue-3 hover:border-blue-4 flex items-center justify-between w-full px-5 py-3 bg-cover bg-no-repeat"
      :class="data ? 'rounded-full' : 'rounded-lg'"
      style="background-image:url('/bg-voucher-ticket.png')">
      <span>Gunakan kode voucher</span>
      <ArrowRight fill="white" :width="20" :height="20" />
    </div>
  </button>
</template>

<script>
import ArrowRight from '~/assets/icons/ArrowRight.svg?inline'
import ArrowCircleRight from '~/assets/icons/ArrowCircleRight.svg?inline'

export default {
  components: {
    ArrowRight,
    ArrowCircleRight,
  },
  props: {
    data: {
      type: [Object, String],
      default() {
        return null
      }
    }
  },
  computed: {
    voucherData() {
      try {
        return JSON.parse(this.data)
      } catch (error) {
        return this.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 378px;
}
</style>