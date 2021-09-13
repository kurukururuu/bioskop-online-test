<template>
  <div class="text-white layout-payment-wrapper">
    <div class="flex justify-between items-center mb-8">
      <div class="text-xl font-bold mobile:text-sm">Menunggu Pembayaran</div>
      <div class="text-sm text-red-primary cursor-pointer">BATALKAN</div>
    </div>
    
    <template v-if="paymentMethod === 'cc'">
      <div class="p-4 mb-8 flex justify-between">
        <div class="text-sm">Total Pembayaran</div>
        <div class="font-semibold">{{formatter.format(10000)}}</div>
      </div>

      <CreditCard />
    </template>
    <template v-else-if="paymentMethod === 'bca'">
      <PaymentTimer :end-time="paymentDetails.endDate" class="mb-7" />
      <div class="text-sm font-semibold mb-3">Transfer ke nomor Virtual Account :</div>
      <div class="px-3 py-2 flex justify-between items-center mb-7">
        <div class="flex items-center">
          <BCAIcon :width="24" :height="24" class="mr-3" />
          <div ref="vaNumber" class="font-bold">{{ paymentDetails.vaNumber }}</div>
        </div>
        <div v-tooltip="{
            content: 'copied',
            show: copySuccess,
            trigger: 'manual',
            placement: 'bottom',
          }" class="text-blue-4 text-xs font-bold cursor-pointer"
          @click="actionCopyVANumber"
          >SALIN</div>
      </div>
      <div class="px-4 py-3 mb-10">
        <div class="text-xs font-bold mb-5">STORY OF KALE</div>
        <div class="flex justify-between text-sm">
          <div class="text-sm">Total Pembayaran</div>
          <div class="font-bold">{{formatter.format(10600)}}</div>
        </div>
      </div>

      <div class="px-4 py-3 mb-8 mobile:p-0">
        <div class="flex justify-between items-center cursor-pointer mb-4 mobile:cursor-default" @click="howToPayOpened = !howToPayOpened">
          <div class="text-sm font-bold">Cara Pembayaran</div>
          <ChevronRight :width="32" :height="32" class="transform rounded-full p-2 transition-all duration-300 ease-in-out mobile:hidden" :class="howToPayOpened ? '-rotate-90' : 'rotate-90'" />
        </div>
        <div class="transition-all duration-1000 ease-in-out overflow-hidden" :class="howToPayOpened ? 'max-h-screen' : 'max-h-0 mobile:max-h-screen'">
          <div class="text-xs mb-2">Pembayaran via BCA Virtual Account</div>
          <ol class="list-decimal list-inside text-xs">
            <li>Salin nomor Virtual account</li>
            <li>Buka aplikasi BCA mobila</li>
            <li>Masukan nomor Virtual Account</li>
            <li>Periksa kembali detail pembayaran kamu</li>
            <li>Jika sudah sesuai konfirmasi dan bayar</li>
            <li>Transaksi berhasil</li>
            <li>Buka APlikasi Bioskop Online dan cek kembali transaksi kamu</li>
          </ol>
        </div>
      </div>

      <BaseButton :disabled="disabled" class="desktop:w-full mobile:w-full mb-4">Saya sudah membayar</BaseButton>
    </template>
  </div>
</template>

<script>
import formatter from '~/assets/js/helper/currencyFormatter'
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import BCAIcon from '~/assets/icons/BCA.svg?inline'

export default {
  components: {
    BCAIcon,
    ChevronRight
  },
  data () {
    return {
      formatter,
      interval: null,
      disabled: false,
      copySuccess: false,
      howToPayOpened: false
    }
  },
  computed: {
    paymentDetails() {
      // dummy
      const today = new Date();
      today.setHours(today.getHours() + 4);

      return {
        vaNumber: '80777082111508008',
        endDate: today.toString()
      }
    },
    paymentMethod() {
      // dummy, change this from store when ready
      return 'bca'
    }
  },
  methods: {
    actionCopyVANumber() {
      const target = this.$refs.vaNumber
      function executeCopy (text) {
        const input = document.createElement('textarea')
        document.body.appendChild(input)
        input.value = text
        input.focus()
        input.select()
        document.execCommand('Copy')
        input.remove()
      }

      const doc = new DOMParser().parseFromString(target.innerText, 'text/html')
      const text = doc.body.innerText
      executeCopy(text)
      this.copySuccess = true
      setTimeout(() => {
        this.copySuccess = false
      }, 5000);
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-payment-wrapper {
    min-width: 500px;
    @apply p-9 border border-opacity-20 rounded-2xl w-fit-content;
  }
}
@media (max-width: 767px) {
  .layout-payment-wrapper {
    width: 100%;
  }
}
</style>