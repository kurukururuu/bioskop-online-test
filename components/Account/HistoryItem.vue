<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-1">
      <img :src="details.cover" alt="package" class="rounded">
    </div>
    <div class="col-span-4">
      <div class="font-bold">{{ details.title || details.name }}</div>
      <div class="flex justify-between text-xs">
        <div>Pembayaran</div>
        <div class="font-bold">{{ formatter.format(data.totalPrice) }}</div>
      </div>
      <div class="flex justify-between text-xs mb-6">
        <div>Status Pembayaran</div>
        <div class="font-bold"
          :class="status.class">{{ status.text }}</div>
      </div>

      <div class="text-xs opacity-50 mb-2">{{ dateConverter(timestamp.created) }} {{new Date(timestamp.created).toLocaleTimeString()}}</div>
      <div class="flex">
        <BaseButton dark size="small" class="ml-auto rounded-full border border-blue-4" @click="$emit('details-opened', data)">Detail</BaseButton>
        <client-only>
          <template v-if="status.red">
            <BaseButton size="small" class="rounded-full ml-2">Coba Lagi</BaseButton>
          </template>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import formatter from '~/assets/js/helper/currencyFormatter'
import dateConverter from '~/assets/js/helper/convertDate'
import getHistoryStatus from '~/assets/js/helper/getHistoryStatus'

export default {
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
      formatter, dateConverter
    }
  },
  computed: {
    details () {
      return this.data.details
    },
    timestamp () {
      return this.data.timestamp
    },
    isRed() {
      return this.status.red
    },
    status() {
      return getHistoryStatus(this.data.status)
    }
  }
}
</script>