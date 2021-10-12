<template>
  <div class="text-white layout-voucher-wrapper bg-blue-1">
    <div class="p-8">
      <div class="flex justify-between items-center mb-4">
        <div class="text-xl font-bold mobile:text-sm">Voucher Saya</div>
        <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$emit('cancel')" />
        <button class="text-lg cursor-pointer desktop:hidden" @click="$emit('cancel')">&#x2715;</button>
      </div>

      <div class="font-bold">Punya kode voucher?</div>
      <div class="text-xs mb-3">Masukkan kode kamu dibawah ini</div>

      <div class="relative flex bg-blue-2 bg-opacity-50 p-4 rounded-lg mb-6">
        <input type="text" class="bg-transparent text-white text-sm w-full focus:outline-none" placeholder="Masukkan kode voucher disini">
        <ArrowWhiteRight fill="transparent" :width="24" :height="24" class="ml-auto" />
      </div>

      <VoucherItem :data="voucherData" />
    </div>
    
    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="p-8">
      <div class="bg-blue-2 bg-opacity-50 p-4 rounded-lg">
        <div class="font-bold">Beli voucher di partner</div>
        <div class="text-xxs">Beli voucher di partner kami banyak beragam promo </div>
        
        <div class="border border-opacity-20 border-dashed w-full my-3"></div>

        <div class="flex items-center">
          <img src="/partner/tokped.png" alt="tokped" class="w-5 h-5 mr-1">
          <img src="/partner/bukalapak.png" alt="bukalapak" class="w-5 h-5 mr-1">
          <img src="/partner/shopee.png" alt="shopee" class="w-5 h-5 mr-1">
          <img src="/partner/eun.png" alt="eun" class="w-5 h-5 mr-1">
          <img src="/partner/loket.png" alt="loket" class="w-5 h-5 mr-1">
          <ArrowWhiteRight fill="transparent" :width="24" :height="24" class="ml-auto" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import XIcon from '~/assets/icons/XIcon.svg?inline'
import ArrowWhiteRight from '~/assets/icons/ArrowWhiteRight.svg?inline'

export default {
  components: {
    XIcon,
    ArrowWhiteRight
  },
  data() {
    return {
      voucherData: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-voucher-wrapper {
    width: 500px;
    @apply bg-blue-1;
    @apply border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-history-wrapper {
    width: 100%;
  }
}
</style>