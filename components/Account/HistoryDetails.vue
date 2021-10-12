<template>
  <div class="flex flex-col desktop:rounded-2xl desktop:w-96 bg-blue-1 p-8 mobile:p-4">
    <div class="flex justify-between mb-8">
      <div class="text-xl font-bold text-white">Detail Riwayat Transaksi</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$emit('cancel')" />
      <button class="text-lg cursor-pointer desktop:hidden" @click="$emit('cancel')">&#x2715;</button>
    </div>

    <div class="p-2 bg-blue-2 bg-opacity-20 flex justify-between items-center rounded-lg border border-blue-2 border-opacity-50 mb-6">
      <div class="text-xxs">
        <span class="opacity-75">Kode Transaksi</span>
        <span>BO-192828</span>
      </div>
      <div class="text-xxs">{{ dateConverter(new Date()) }} {{new Date().toLocaleTimeString()}}</div>
    </div>

    <div class="text-xs font-bold mb-2">STORY OF KALE</div>
    <div class="flex justify-between text-sm mobile:text-xs">
      <div class="opacity-50">Total Pembayaran</div>
      <div class="font-bold">{{formatter.format(data.totalPrice)}}</div>
    </div>
    <div class="flex justify-between text-sm mobile:text-xs">
      <div class="opacity-50">Metode Pembayaran</div>
      <div class="font-bold">{{ data.payment_method }}</div>
    </div>
    <div class="flex justify-between text-sm mobile:text-xs">
      <div class="opacity-50">Status Pembayaran</div>
      <div class="font-bold" :class="status.class">{{status.text}}</div>
    </div>
  </div>
</template>

<script>
import XIcon from '~/assets/icons/XIcon.svg?inline'
import dateConverter from '~/assets/js/helper/convertDate'
import formatter from '~/assets/js/helper/currencyFormatter'
import getHistoryStatus from '~/assets/js/helper/getHistoryStatus'

export default {
  components: {
    XIcon
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      dateConverter, formatter,
      loading: false
    }
  },
  computed: {
    status() {
      return getHistoryStatus(this.data.status)
    }
  }
}
</script>