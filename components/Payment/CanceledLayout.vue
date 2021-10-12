<template>
  <div class="flex flex-col items-center p-8 text-white layout-payment-wrapper">
    <WalletIcon :width="100" :height="100" class="mb-4" />
    <div class="font-bold text-sm text-center mb-10">
      Pembayaran dibatalkan
    </div>

    <div class="flex w-full mb-9">
      <div>
        <div class="text-sm font-bold">STORY OF KALE</div>
        <div class="flex text-white items-center mb-4">
          <div class="opacity-50 text-sm mr-2">Drama,Family</div>
          <div class="opacity-50 text-sm mr-2 border rounded-sm px-1">17+</div>
          <div class="opacity-50 text-sm">1 h 40 Menit</div>
        </div>
      </div>
    </div>

    <div class="px-4 py-3 mb-7 w-full">
      <div class="text-sm font-bold mb-2">Detail Transaksi</div>
      <div class="flex justify-between text-xs">
        <div>Total Pembayaran</div>
        <div class="font-semibold">{{formatter.format(10600)}}</div>
      </div>
      <div class="flex justify-between text-xs">
        <div>Metode Pembayaran</div>
        <div class="font-semibold">OVO</div>
      </div>
      <div class="flex justify-between text-xs">
        <div>Status Pembayaran</div>
        <div class="font-semibold">Dibatalkan</div>
      </div>
    </div>

    <div class="text-center mb-10">
      <div class="text-xs">Kode Transaksi <span class="font-bold">BO-122021</span></div>
      <div class="text-xs">{{new Date().toLocaleString()}}</div>
    </div>

    <BaseButton class="w-full mobile:w-full mb-4" @click="$emit('retry')">Coba Lagi?</BaseButton>
    <BaseButton dark class="w-full mobile:w-full border border-blue-4" @click="$emit('close')">Tidak</BaseButton>
  </div>
</template>

<script>
import WalletIcon from '~/assets/icons/WalletClose.svg?inline'
import formatter from '~/assets/js/helper/currencyFormatter'
import dateConverter from '~/assets/js/helper/convertDate'

export default {
  components: {
    WalletIcon
  },
  data() {
    return {
      formatter,dateConverter
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-payment-wrapper {
    width: 500px;
    @apply bg-blue-1 p-9 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-payment-wrapper {
    @apply w-full bg-blue-1 p-4;
    // for mobile layout full-screen height
    // needs div parent with fixed or 100vh height
    @apply h-full flex flex-col;
  }
}
</style>