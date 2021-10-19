<template>
  <div class="flex flex-col items-center p-8 text-white layout-payment-wrapper">
    <WalletIcon :width="100" :height="100" class="mb-4" />
    <div class="font-bold text-center mb-9">
      Apakah kamu yakin,<br>
      <span class="text-xs">akan membatalkan pembayaran?</span>
    </div>
    <BaseButton class="w-full mobile:w-full mb-4" @click="$emit('close')">Tidak</BaseButton>
    <BaseButton dark class="w-full mobile:w-full border border-blue-4" @click="$emit('confirm')">Yakin</BaseButton>
  </div>
</template>

<script>
import WalletIcon from '~/assets/icons/WalletQuestion.svg?inline'

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