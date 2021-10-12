<template>
  <div class="text-white layout-menu-wrapper">
    <div class="flex justify-between items-center mb-4">
      <div class="text-xl font-bold mobile:text-lg">Akun Saya</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
    </div>
    
    <div class="border border-opacity-20 w-full my-5 desktop:hidden"></div>

    <div class="text-lg font-bold mobile:text-xs">
      Mantis
    </div>
    <div class="text-sm mobile:text-xs">08211805003</div>
    <div class="text-sm mobile:text-xs">mantis.07@gmail.com</div>
    <div class="border border-red-secondary px-4 py-3 flex items-center justify-between rounded-lg mt-4">
      <div>
        <div class="text-xs font-bold text-red-secondary">Email belum terverifikasi</div>
        <div class="text-xxs text-red-secondary">Verifikasi email kamu sekarang</div>
      </div>
      <button class="bg-red-secondary text-xxs text-white font-bold rounded-full px-4 py-1" @click="$modal.show('email-verification')">Verifikasi</button>
    </div>

    <div class="border border-opacity-20 w-full my-5"></div>

    <div class="p-4 bg-blue-2 bg-opacity-20 border border-blue-2 border-opacity-50 rounded-lg flex items-center mb-7">
      <TicketIcon :width="20" :height="20" class="mr-3" />
      <nuxt-link to="my-voucher" class="text-blue-4">
        <div class="text-xs font-bold">Voucher Saya</div>
        <div class="text-xxs">Tukar voucher , beli voucher atau promo</div>
      </nuxt-link>
      <ArrowWhiteRight fill="transparent" :width="24" :height="24" class="ml-auto" />
    </div>

    <div class="mobile:hidden flex flex-col">
      <nuxt-link to="/my-account/info" class="text-sm font-bold mb-2">Info Akun</nuxt-link>
      <nuxt-link to="/my-account/history" class="text-sm font-bold mb-2">Riwayat Pembelian</nuxt-link>
      <nuxt-link to="/my-account/help" class="text-sm font-bold mb-5">Pusat Bantuan</nuxt-link>
    </div>

    <div class="desktop:hidden">
      <div class="text-sm opacity-50 mb-6">Akun</div>

      <nuxt-link to="/my-account/info" class="flex items-center cursor-pointer">
        <UserBorderIcon fill="transparent" :width="24" :height="24" class="mr-3" />
        <div class="text-xs font-bold">Info Akun</div>
        <ChevronRight :width="16" :height="16" class="ml-auto" />
      </nuxt-link>

      <div class="border border-opacity-20 w-full my-4"></div>
      
      <nuxt-link to="/my-account/history" class="flex items-center cursor-pointer">
        <DocumentTimeIcon fill="transparent" :width="24" :height="24" class="mr-3" />
        <div class="text-xs font-bold">Riwayat Transaksi</div>
        <ChevronRight :width="16" :height="16" class="ml-auto" />
      </nuxt-link>
      
      <div class="border border-opacity-20 w-full my-4"></div>

      <nuxt-link to="/my-account/help" class="flex items-center cursor-pointer">
        <QuestionIcon fill="transparent" :width="24" :height="24" class="mr-3" />
        <div class="text-xs font-bold">Pusat Bantuan</div>
        <ChevronRight :width="16" :height="16" class="ml-auto" />
      </nuxt-link>
      
      <div class="border border-opacity-20 w-full my-4"></div>

      <div class="text-sm opacity-50 mb-6 mt-8">Info Lainnya</div>

      <div class="flex items-center cursor-pointer">
        <PaperIcon fill="transparent" :width="24" :height="24" class="mr-3" />
        <div class="text-xs font-bold">Kebijakan Privasi</div>
        <ChevronRight :width="16" :height="16" class="ml-auto" />
      </div>

      <div class="border border-opacity-20 w-full my-4"></div>
      
      <div class="flex items-center cursor-pointer">
        <ShieldIcon fill="transparent" :width="24" :height="24" class="mr-3" />
        <div class="text-xs font-bold">Ketentuan Layanan</div>
        <ChevronRight :width="16" :height="16" class="ml-auto" />
      </div>
      
      <div class="border border-opacity-20 w-full my-4"></div>

      <div class="flex items-center cursor-pointer">
        <InfoIcon fill="transparent" :width="24" :height="24" class="mr-3" />
        <div class="text-xs font-bold">Tentang Kami</div>
        <ChevronRight :width="16" :height="16" class="ml-auto" />
      </div>
      
      <div class="border border-opacity-20 w-full my-4"></div>

      <div class="flex items-center cursor-pointer">
        <StarIcon fill="transparent" :width="24" :height="24" class="mr-3" />
        <div class="text-xs font-bold">Nilai Kami</div>

        <div class="text-xs font-bold opacity-50 ml-auto">V 1.0.0</div>
        <ChevronRight :width="16" :height="16" class="ml-3" />
      </div>
      
      <div class="border border-opacity-20 w-full my-4"></div>
    </div>

    <button class="text-sm font-bold text-red-secondary mt-4">
      KELUAR
    </button>

    <Modal name="email-verification"
      :click-to-close="false"
      classes="modal-classes"
      height="auto">
      <AccountEmailVerification @cancel="$modal.hide('email-verification')" />
    </Modal>
  </div>
</template>

<script>
import ArrowWhiteRight from '~/assets/icons/ArrowWhiteRight.svg?inline'
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import DocumentTimeIcon from '~/assets/icons/DocumentTimeBorder.svg?inline'
import InfoIcon from '~/assets/icons/InfoBorder.svg?inline'
import PaperIcon from '~/assets/icons/Paper.svg?inline'
import QuestionIcon from '~/assets/icons/QuestionMarkCircle.svg?inline'
import ShieldIcon from '~/assets/icons/Shield.svg?inline'
import StarIcon from '~/assets/icons/Star.svg?inline'
import TicketIcon from '~/assets/icons/Ticket.svg?inline'
import UserBorderIcon from '~/assets/icons/UserBorder.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    ArrowWhiteRight,
    ChevronRight,
    DocumentTimeIcon,
    InfoIcon,
    PaperIcon,
    QuestionIcon,
    ShieldIcon,
    StarIcon,
    TicketIcon,
    UserBorderIcon,
    XIcon
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-menu-wrapper {
    width: 500px;
    @apply p-8 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-menu-wrapper {
    width: 100%;
  }
}
</style>