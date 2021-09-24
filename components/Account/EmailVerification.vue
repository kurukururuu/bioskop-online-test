<template>
  <div class="text-white layout-verification-wrapper">
    <template v-if="!verifyEmailSent">
      <div class="flex justify-between items-center mb-4 mobile:justify-start">
        <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" />
        <div class="text-xl font-bold mobile:text-lg">Verifikasi Email</div>
        <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
      </div>

      <div class="text-xs mb-6">Verifikasi email anda disini. Jika terjadi kesalahan penulisan, silahkan ubah disini.</div>
      <form @submit.prevent="actionSubmit">
        <div class="border border-opacity-50 rounded-full px-7 py-3 mb-8 mobile:hidden">
          <input v-model="form.email" required type="email" class="bg-transparent w-full text-sm">
        </div>
        <BaseInput v-model="form.email" required label="Email" name="email" type="email" class="desktop:hidden" />
        <BaseButton class="w-full desktop:text-lg mobile:w-full">Verifikasi</BaseButton>
      </form>
    </template>
    <template v-else>
      <div class="flex flex-col items-center text-center">
        <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden ml-auto" />
        <MailIcon :width="100" :height="100" class="mb-4 mt-8" />

        <div class="font-bold mb-3">Menunggu verifikasi email</div>
        <div class="text-xs mb-14">Cek notifikasi email kamu kemudian<br>lakukan verifikasi</div>

        <BaseButton class="w-full desktop:text-lg mobile:w-full">Mengerti</BaseButton>
      </div>
    </template>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import MailIcon from '~/assets/icons/MailQuestion.svg?inline'

export default {
  components: {
    ChevronRight,
    XIcon,
    MailIcon
  },
  data() {
    return {
      form: {},
      verifyEmailSent: false
    }
  },
  methods: {
    actionSubmit() {
      console.log('verification..')
      this.verifyEmailSent = true
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-verification-wrapper {
    width: 500px;
    @apply bg-blue-2;
    @apply p-8 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-history-wrapper {
    width: 100%;
  }
}
</style>