<template>
  <div class="text-white layout-login-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" />
      <div class="text-xl font-bold mobile:text-lg">Masuk</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
    </div>

    <div class="text-xs mb-6">Silahkan masuk ke akun kamu menggunakan Nomor Ponsel atau <span class="italic">Email</span></div>
    <form class="mb-6" @submit.prevent="actionSubmit">
      <div class="border border-opacity-50 rounded-full px-7 py-3 mb-8 mobile:hidden">
        <input v-model="form.username" required class="bg-transparent w-full text-sm" placeholder="Nomor Ponsel / Email">
      </div>
      <BaseButton :disabled="disabled" class="w-full desktop:text-lg mobile:hidden">Lanjutkan</BaseButton>
    </form>

    <div class="text-center border-b border-opacity-20 mt-4 mx-5 text-white mb-6" style="line-height: 0.1em;">
      <span class="bg-blue-1 pt-0 px-3 text-xs" style="line-height: unset;">Atau masuk dengan</span>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2">
        <div class="flex items-center">
          <GoogleIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Google</div>
        </div>
      </BaseButton>
      <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2">
        <div class="flex items-center">
          <FacebookIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Facebook</div>
        </div>
      </BaseButton>
    </div>

    <div class="text-center text-xs">Belum punya akun? <span class="font-bold text-blue-4">DAFTAR</span></div>
    
    <BaseButton :disabled="disabled" class="desktop:hidden mobile:w-full mt-auto">Lanjutkan</BaseButton>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import FacebookIcon from '~/assets/icons/Facebook.svg?inline'
import GoogleIcon from '~/assets/icons/Google.svg?inline'

export default {
  components: {
    ChevronRight,
    XIcon,
    FacebookIcon,
    GoogleIcon
  },
  data() {
    return {
      disabled: false,
      form: {}
    }
  },
  methods: {
    actionSubmit() {

    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-login-wrapper {
    // width: 500px;
    width: fit-content;
    @apply bg-blue-2 p-8 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-login-wrapper {
    @apply w-full;
    // for mobile layout full-screen height
    // needs div parent with fixed or 100vh height
    @apply h-full flex flex-col;
  }
}
</style>