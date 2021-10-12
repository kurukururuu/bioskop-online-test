<template>
  <div class="text-white layout-payment-wrapper">
    <div class="flex justify-between items-center mb-8">
      <div class="text-xl font-bold mobile:text-sm">Konfirmasi Pembayaran</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
      <button class="text-lg cursor-pointer desktop:hidden">&#x2715;</button>
    </div>

    <div class="mb-4">
      <div class="font-bold">STORY OF KALE</div>
      <div class="flex text-white items-center mb-4">
        <div class="opacity-50 text-sm mr-2">Drama,Family</div>
        <div class="opacity-50 text-sm mr-2 border rounded-sm px-1">17+</div>
        <div class="opacity-50 text-sm">1 h 40 Menit</div>
      </div>
    </div>

    <PaymentMethodButton :method="paymentMethod" @change-payment="$emit('prev')" />
    
    <div class="px-5 py-2 mb-9">
      <div class="text-sm font-bold">Rincian</div>
      <div class="flex justify-between items-center text-xs">
        <div>Harga Film</div>
        <div class="font-semibold">{{formatter.format(10000)}}</div>
      </div>
      <div class="flex justify-between items-center text-xs">
        <div>Voucher</div>
        <div class="font-semibold">-</div>
      </div>
      <div class="flex justify-between items-center text-xs">
        <div>Biaya Admin</div>
        <div class="font-semibold">{{formatter.format(100)}}</div>
      </div>
      <div class="flex justify-between items-center text-xs">
        <div>Pajak</div>
        <div class="font-semibold">{{formatter.format(500)}}</div>
      </div>
      <div class="flex justify-between items-center text-xs mb-4">
        <div>Metode Pembayaran</div>
        <div class="font-semibold uppercase">{{ paymentMethod }}</div>
      </div>
      <div class="flex justify-between items-center text-sm">
        <div>Total</div>
        <div class="font-semibold">{{formatter.format(10600)}}</div>
      </div>
    </div>

    <BaseButton :disabled="disabled" class="desktop:w-full mobile:w-full mb-4 desktop:text-lg" @click="$emit('next')">Lanjut Pembayaran</BaseButton>
  </div>
</template>

<script>
import XIcon from '~/assets/icons/XIcon.svg?inline'
import formatter from '~/assets/js/helper/currencyFormatter'

export default {
  components: {
    XIcon
  },
  data() {
    return {
      formatter,
      disabled: false,
    }
  },
  computed: {
    paymentMethod() {
      return this.$store.state.application.payment.method
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