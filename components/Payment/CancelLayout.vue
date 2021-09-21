<template>
  <div class="flex flex-col items-center p-8 text-white layout-payment-wrapper">
    <WalletIcon :width="100" :height="100" class="mb-4" />
    <div class="font-bold text-center mb-9">
      Apakah kamu yakin,<br>
      <span class="text-xs">akan membatalkan pembayaran?</span>
    </div>
    <BaseButton class="w-full mb-4">Tidak</BaseButton>
    <BaseButton dark class="w-full border border-blue-4">Yakin</BaseButton>
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
    @apply bg-blue-2 p-9 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-payment-wrapper {
    width: 100%;
  }
}
</style>