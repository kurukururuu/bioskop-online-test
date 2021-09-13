<template>
  <div class="text-white layout-payment-wrapper">
    <div class="flex justify-between items-center mb-8">
      <div class="text-xl font-bold mobile:text-sm">Metode Pembayaran</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
      <div class="text-lg cursor-pointer desktop:hidden">&#x2715;</div>
    </div>

    <div class="grid grid-cols-4 gap-3 mb-12">
      <img src="/dummy/film-potrait.jpg" class="col-span-1">
      <div class="col-span-3 flex flex-col justify-between">
        <div>
          <div class="font-bold">STORY OF KALE</div>
          <div class="flex text-white items-center mb-4">
            <div class="opacity-50 text-sm mr-2">Drama,Family</div>
            <div class="opacity-50 text-sm mr-2 border rounded-sm px-1">17+</div>
            <div class="opacity-50 text-sm">1 h 40 Menit</div>
          </div>
        </div>
        <div class="font-bold text-yellow-primary">
          Rp. 5.000
        </div>
      </div>
    </div>

    <div class="border border-opacity-20 w-full my-5"></div>

    <div class="flex justify-between items-center px-4 py-3 mb-7">
      <div class="flex items-center">
        <ClockIcon width="24" height="24" class="mr-3" stroke="white" />
        <div class="text-xs font-semibold">Durasi Sewa 48 Jam</div>
      </div>
      <div class="text-xs font-bold text-blue-4 cursor-pointer">Detail</div>
    </div>

    <VoucherButton class="w-full mb-16" />
    <!-- <VoucherButton :data="{code:'A1B2C3D4E5'}" class="w-full" /> -->

    <BaseButton :disabled="disabled" class="desktop:w-full mobile:w-full mb-4">Lanjutkan</BaseButton>
  </div>
</template>

<script>
import XIcon from '~/assets/icons/XIcon.svg?inline'
import ClockIcon from '~/assets/icons/ClockWhite.svg?inline'

export default {
  components: {
    XIcon,
    ClockIcon
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-payment-wrapper {
    width: 500px;
    @apply p-9 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-payment-wrapper {
    width: 100%;
  }
}
</style>