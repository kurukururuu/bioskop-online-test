<template>
  <div class="flex flex-col items-center justify-center p-8 text-white layout-payment-wrapper">
    <div class="flex flex-col items-center mt-auto">
      <WalletIcon :width="100" :height="100" class="mb-4" />
      <div class="font-bold text-center mb-4">
        Oops terjadi kesalahan<br>
        <span class="text-xs">metode pembayaran sedang gangguan,<br>coba lagi nanti</span>
      </div>
      <div class="mb-4 text-xs">
        Hubungi pusat bantuan? <nuxt-link to="/my-account/help" class="font-semibold text-blue-4">KLIK DISINI</nuxt-link>
      </div>
    </div>
    <BaseButton dark class="w-full mobile:w-full border border-blue-4 mt-auto"  @click="$emit('close')">Konfirmasi</BaseButton>
  </div>
</template>

<script>
import WalletIcon from '~/assets/icons/WalletCaution.svg?inline'

export default {
  components: {
    WalletIcon
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