<template>
  <div class="text-white layout-payment-wrapper">
    <div class="flex justify-between items-center mb-8"
      :class="paymentMethod === 'qris' && qrisStep === 1 ? 'hidden' : ''">
      <div v-if="(paymentMethod !== 'qris' && qrisStep === 1) || (paymentMethod === 'qris' && qrisStep === 3)"
        class="text-xl font-bold mobile:text-sm">Menunggu Pembayaran</div>
      <div v-else class="text-xl font-bold mobile:text-sm">QRIS</div>
      <div class="text-sm text-red-primary cursor-pointer">BATALKAN</div>
    </div>
    
    <template v-if="paymentMethod === 'cc'">
      <div class="p-4 mb-8 flex justify-between">
        <div class="text-sm">Total Pembayaran</div>
        <div class="font-semibold">{{formatter.format(10000)}}</div>
      </div>

      <CreditCard />
    </template>
    <template v-else-if="paymentMethod === 'bca' || paymentMethod === 'telkomsel'">
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
            <li>Buka Aplikasi Bioskop Online dan cek kembali transaksi kamu</li>
          </ol>
        </div>
      </div>

      <BaseButton :disabled="disabled" class="desktop:w-full mobile:w-full mb-4">Saya sudah membayar</BaseButton>
    </template>

    <template v-else-if="paymentMethod === 'qris'">
      <!-- mobile -->
      <div class="mobile:hidden">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <div class="flex items-center mb-8">
              <ClockIcon width="20" height="20" stroke="white" class="mr-3" />
              <PaymentTimer inline-mode :end-time="paymentDetails.endDate" />
            </div>

            <div class="px-4 py-3 mb-5">
              <div class="text-xs font-bold mb-5">STORY OF KALE</div>
              <div class="flex justify-between text-sm">
                <div>Total Pembayaran</div>
                <div class="font-bold">{{formatter.format(10600)}}</div>
              </div>
            </div>

            <div class="text-sm font-semibold mb-3">
              Cara melakukan Pembayaran
            </div>
            <ol class="list-decimal list-inside text-xs">
              <li>Buka aplikasi Dompet Elektronik yang dimiliki fasilitas QRIS (<span class="text-blue-4">BCA Mobile, Gopay, OVO, LinkAja, Shopee Pay</span>)</li>
              <li>Pindai QR code ke layar kamu</li>
              <li>Periksa kembali detail pembayarann kamu</li>
              <li>Jika sudah sesuai konfirmasi dan bayar</li>
              <li>Transaksi berhasil</li>
            </ol>
          </div>

          <div class="col-span-1">
            <div class="border border-white border-opacity-20 rounded-2xl px-12 py-6 flex flex-col items-center">
              <div class="font-bold">Pindai QR code di bawah</div>
              <img src="/dummy/qr-dummy.png" alt="qrcode" class="w-48 my-4 rounded-lg">
              <div class="text-xxs">Menerima pembayaran melalui aplikasi di bawah ini</div>
              <img src="/dummy/payment-e-wallet.png" alt="qris-payment" class="mt-2 mb-1">
              <div class="text-xxs">Dan merchant lain yang menerima pembayaran QRIS</div>
            </div>
          </div>
        </div>

        <div class="font-semibold mb-4">Cek Vidio tutorial di bawah</div>
        <iframe src="https://www.youtube.com/embed/6D9ilAo_IuQ" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
          class="w-full h-96"></iframe>
      </div>

      <!-- desktop -->
      <div class="desktop:hidden">
        <template v-if="paymentMethod === 'qris' && qrisStep === 1">
          <div class="font-semibold mb-5">Cara Pembayaran</div>
          <div class="text-xs mb-4">Pembayaran via QRIS</div>
          <ol class="list-decimal list-inside text-xs mb-14">
            <li>Klik tombol <span class="font-bold">UNDUH QRIS</span> untuk menyimpan QR code nya</li>
            <li>Buka aplikasi Dompet Elektronik yang dimiliki fasilitas QRIS</li>
            <li>Masukan QR code dari QRIS yang sudah diunduh sebelumnya</li>
            <li>Periksa kembali detail pembayaran kamu</li>
            <li>Jika sudah sesuai konfirmasi dan bayar</li>
            <li>Transaksi berhasil</li>
            <li>Buka Aplikasi Bioskop Online dan cek kembali transaksi kamu</li>
          </ol>
          <BaseButton class="text-lg mobile:w-full" @click="qrisStep = 2">Mengerti</BaseButton>
        </template>
        <template v-else-if="paymentMethod === 'qris' && qrisStep === 2">
          <div class="flex flex-col items-center">
            <div class="flex items-center mb-5">
              <ClockIcon width="20" height="20" stroke="white" class="mr-3" />
              <PaymentTimer inline-mode :end-time="paymentDetails.endDate" class="overflow-hidden" />
            </div>
            <div class="text-xs mb-8">Cara melakukan pembayaran? <a href="https://www.google.com" class="text-blue-4 underline">KLIK DISINI</a></div>
            <img src="/dummy/qr-dummy-full.png" alt="qrcode-full" class="rounded-lg w-11/12 mb-20">
            <BaseButton class="text-lg mobile:w-full" @click="qrisStep = 3">UNDUH QRIS</BaseButton>
          </div>
        </template>
        <template v-else>
          <PaymentTimer :end-time="paymentDetails.endDate" class="mb-4" />
          <div class="flex items-center justify-between px-5 py-4 mb-5">
            <div class="flex items-center">
              <QrisIcon :width="24" :height="24" class="mr-3" />
              <div class="text-xs">QRIS</div>
            </div>
            <div class="text-xs border border-blue-4 rounded-full px-3 py-1 text-blue-4 cursor-pointer" @click="qrisStep = 2">Kode QR</div>
          </div>
          <div class="px-4 py-3 mb-4">
            <div class="text-xs font-bold mb-5">STORY OF KALE</div>
            <div class="flex justify-between text-sm">
              <div>Total Pembayaran</div>
              <div class="font-bold">{{formatter.format(10600)}}</div>
            </div>
          </div>

          <div class="font-semibold mb-5">Cara Pembayaran</div>
          <div class="text-xs mb-4">Pembayaran via QRIS</div>
          <ol class="list-decimal list-inside text-xs mb-14">
            <li>Klik tombol <span class="font-bold">UNDUH QRIS</span> untuk menyimpan QR code nya</li>
            <li>Buka aplikasi Dompet Elektronik yang dimiliki fasilitas QRIS</li>
            <li>Masukan QR code dari QRIS yang sudah diunduh sebelumnya</li>
            <li>Periksa kembali detail pembayaran kamu</li>
            <li>Jika sudah sesuai konfirmasi dan bayar</li>
            <li>Transaksi berhasil</li>
            <li>Buka Aplikasi Bioskop Online dan cek kembali transaksi kamu</li>
          </ol>
          <BaseButton class="text-lg mobile:w-full" @click="qrisStep = 1 && submitPayment()">Tutup</BaseButton>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import formatter from '~/assets/js/helper/currencyFormatter'
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import BCAIcon from '~/assets/icons/BCA.svg?inline'
import ClockIcon from '~/assets/icons/ClockWhite.svg?inline'
import QrisIcon from '~/assets/icons/Qris.svg?inline'

export default {
  components: {
    BCAIcon,
    ChevronRight,
    ClockIcon,
    QrisIcon
  },
  data () {
    return {
      formatter,
      interval: null,
      disabled: false,
      copySuccess: false,
      howToPayOpened: false,
      qrisStep: 1,
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
    },
    submitPayment() {
      console.log('pay')
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-payment-wrapper {
    min-width: 500px;
    @apply bg-blue-2 p-9 border border-opacity-20 rounded-2xl w-fit-content;
  }
}
@media (max-width: 767px) {
  .layout-payment-wrapper {
    width: 100%;
  }
}
</style>