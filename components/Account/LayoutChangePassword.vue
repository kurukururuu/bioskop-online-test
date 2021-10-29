<template>
  <div class="text-white layout-login-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$emit('cancel')" />
      <div class="text-xl font-bold mobile:text-lg">Buat Password Baru</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$emit('cancel')" />
    </div>
    
    <div class="text-xs mb-6">Buat password baru. Tip: buat yang mudah diingat <br>tapi susah ditebak</div>

    <FormErrorMessage :data="error" />

    <form class="mb-6" @submit.prevent="actionChangePassword">
      <div class="mb-5">
        <BaseInput v-model="form.password" required password name="password" placeholder="Password" label="Buat Password"
          helper-text="Min. 7 karakter berupa kombinasi angka, huruf besar dan huruf kecil" />
      </div>
      <BaseButton :disabled="disabled" class="w-full desktop:text-lg mobile:w-full">Kirim</BaseButton>
    </form>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    ChevronRight,
    XIcon,
  },
  data() {
    return {
      disabled: false,
      form: {
        password: ''
      },
      error: null
    }
  },
  methods: {
    async actionChangePassword() {
      this.disabled = true
      try {
        const form = this.form
        form.token = this.$route.params.token
        await this.$store.dispatch('user/actionUpdatePassword', form)
        alert('Password berhasil dirubah, anda akan dialihkan ke halaman utama.')
        this.$router.push('/')
      } catch (error) {
        console.log({error})
        this.error = {
          title: error.message
        }
      } finally {
        this.disabled = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-login-wrapper {
    width: 500px;
    // width: fit-content;
    @apply bg-blue-1 p-8 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-login-wrapper {
    @apply w-full bg-blue-1 p-4;
    // for mobile layout full-screen height
    // needs div parent with fixed or 100vh height
    @apply h-full flex flex-col;
  }
}
</style>