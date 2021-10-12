<template>
  <div class="text-white layout-payment-wrapper">
    <div class="flex justify-between items-center mb-8">
      <div class="text-xl font-bold mobile:text-sm">Metode Pembayaran</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
      <button class="text-lg cursor-pointer desktop:hidden">&#x2715;</button>
    </div>
    
    <div class="mb-6">
      <div class="text-xs font-bold opacity-50 mb-3">E-WALLET</div>
      <div class="flex flex-col items-center">
        <label class="flex justify-between w-full mb-2 hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <QrisIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">QRIS</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
        <div class="flex justify-center w-full">
          <img src="/dummy/payment-e-wallet.png" alt="e-wallet">
        </div>
      </div>
    </div>

    <div class="mb-6">
      <div class="text-xs font-bold opacity-50 mb-3">KARTU</div>
      <div class="flex flex-col items-center">
        <label class="flex justify-between w-full mb-2 hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <CCIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">Kartu Pembayaran</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
        <div class="flex justify-center w-full">
          <img src="/dummy/payment-cc.png" alt="cc">
        </div>
      </div>
    </div>

    <div class="mb-6">
      <div class="text-xs font-bold opacity-50 mb-3">TRANSFER VIRTUAL ACCOUNT</div>
      <div class="grid grid-cols-2 gap-5">
        <label class="col-span-1 flex justify-between hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <BCAIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">BCA VA</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
      </div>
    </div>

    <div class="mb-6">
      <div class="text-xs font-bold opacity-50 mb-3">PULSA</div>
      <div class="grid grid-cols-2 gap-5">
        <label class="col-span-1 flex justify-between hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <TelkomselIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">TELKOMSEL</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
        
        <label class="col-span-1 flex justify-between hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <TriIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">TRI</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
        
        <label class="col-span-1 flex justify-between hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <SmartfrenIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">SMARTFREN</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
        
        <label class="col-span-1 flex justify-between hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <XLIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">XL</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
        
        <label class="col-span-1 flex justify-between hover:payment-item cursor-pointer">
          <div class="flex items-center">
            <IndosatIcon :width="24" :height="24" class="mr-3" />
            <div class="text-sm font-bold hover:text-blue-4">INDOSAT</div>
          </div>
          <BaseInput v-model="form.method" radio required label="" name="method" class="w-5 flex items-center" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
// import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import QrisIcon from '~/assets/icons/Qris.svg?inline'
import CCIcon from '~/assets/icons/CreditCard.svg?inline'
import BCAIcon from '~/assets/icons/BCA.svg?inline'
import TelkomselIcon from '~/assets/icons/Telkomsel.svg?inline'
import TriIcon from '~/assets/icons/Tri.svg?inline'
import SmartfrenIcon from '~/assets/icons/Smartfren.svg?inline'
import XLIcon from '~/assets/icons/XL.svg?inline'
import IndosatIcon from '~/assets/icons/Indosat.svg?inline'

export default {
  components: {
    // ChevronRight,
    XIcon,
    QrisIcon,
    CCIcon,
    BCAIcon,
    TelkomselIcon,
    TriIcon,
    SmartfrenIcon,
    XLIcon,
    IndosatIcon
  },
  data() {
    return {
      disabled: false,
      form: {}
    }
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

<style lang="scss">
.hover\:payment-item:hover {
  @apply text-blue-4;
  .radio {
    @apply bg-opacity-100;
  }
}
</style>