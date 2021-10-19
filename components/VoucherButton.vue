<template>
  <button class="text-button" @click="$emit('click')">
    <div v-if="!!data"
      class="bg-blue-2 bg-opacity-20 h-12 text-white border border-blue-3 hover:border-blue-4 flex items-center justify-between w-full px-5 py-3"
      :class="data ? 'rounded-full' : 'rounded-lg'">
      <span class="text-sm font-bold">{{voucherData.code}}</span>
      <ArrowRight fill="white" :width="20" :height="20" />
    </div>
    <div v-else
      class="bg-blue-2 bg-opacity-20 h-12 text-white border border-blue-3 hover:border-blue-4 flex items-center justify-between w-full px-5 py-3 bg-cover bg-no-repeat"
      :class="data ? 'rounded-full' : 'rounded-lg'">
      <div class="flex items-center">
        <TicketIcon :width="20" :height="20" class="mr-3" />
        <span class="font-bold text-blue-4">Gunakan Voucher</span>
      </div>
      <ArrowWhiteRight fill="transparent" :width="24" :height="24" />
    </div>
  </button>
</template>

<script>
import ArrowRight from '~/assets/icons/ArrowRight.svg?inline'
import ArrowWhiteRight from '~/assets/icons/ArrowWhiteRight.svg?inline'
import TicketIcon from '~/assets/icons/Ticket.svg?inline'

export default {
  components: {
    ArrowRight,
    ArrowWhiteRight,
    TicketIcon
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
  // min-width: 378px;
}
</style>