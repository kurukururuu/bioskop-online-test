<template>
  <div class="bg-blue-2 bg-opacity-50 relative" :class="disabledVoucher ? 'rounded-t-lg' : 'rounded-lg'">
    <div class="px-4 py-3">
      <div v-if="selected" class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <CheckmarkIcon width="20" height="20" class="mr-2" />
          <div class="text-green-400 text-xs">Tiket Terpasang</div>
        </div>
        <button class="text-lg cursor-pointer z-10" @click="$emit('unselect-voucher')">&#x2715;</button>
      </div>

      <div class="text-xxs">Kode Tiket</div>
      <div class="flex items-center justify-between mb-2">
        <div class="text-xl font-bold">Sokvoucherbo</div>
        <button v-if="selected" class="text-xs text-blue-4 cursor-pointer z-10" @click="detailsExtended = !detailsExtended">{{ detailsExtended ? 'Tutup' : 'Detail' }}</button>
      </div>
      <div v-if="!selected" class="text-xxs font-semibold mb-7">Potongan Harga {{ formatter.format(10000) }}</div>

      <TicketTransformedIcon :width="90" :height="90" class="absolute top-0 right-0 rounded-tr-lg" />

      <div v-if="!selected" class="flex items-center justify-between mb-4">
        <button class="text-xs text-blue-4 cursor-pointer z-10" @click="detailsExtended = !detailsExtended">{{ detailsExtended ? 'Tutup' : 'Detail' }}</button>
        <BaseButton size="small" :disabled="disabledVoucher">Gunakan</BaseButton>
      </div>
      <div class="transition-all duration-300 ease-in-out overflow-hidden"
        :class="detailsExtended ? 'max-h-20': 'max-h-0'">
        <ol class="list-decimal list-inside text-xs">
          <li>Promo berlaku hanya di apps</li>
          <li>Berlaku hanya 1x pakai</li>
        </ol>
      </div>
    </div>
    
    <div v-if="disabledVoucher" class="rounded-b-lg bg-red-secondary p-2 text-xs text-center font-semibold">
      Voucher tidak dapat digunakan
    </div>
  </div>
</template>

<script>
import TicketTransformedIcon from '~/assets/icons/TicketTransformed.svg?inline'
import CheckmarkIcon from '~/assets/icons/CheckmarkGreen.svg?inline'
import formatter from '~/assets/js/helper/currencyFormatter'

export default {
  components: {
    TicketTransformedIcon,
    CheckmarkIcon
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    selected: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      formatter,
      detailsExtended: false
    }
  },
  computed: {
    disabledVoucher() {
      return true
    }
  }
}
</script>