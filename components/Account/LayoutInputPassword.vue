<template>
  <div class="text-white layout-login-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$emit('cancel')" />
      <div class="text-xl font-bold mobile:text-lg">Password</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$emit('cancel')" />
    </div>
    
    <div class="text-xs mb-3">Masukan password kamu, jika kamu lupa <br>password silahkan klik tombol lupa password</div>
    <div class="text-sm font-bold mb-7">{{ $store.state.user.verifyData.email }}</div>

    <FormErrorMessage :data="error" />

    <form class="mb-6" @submit.prevent="actionLogin">
      <div class="border border-opacity-50 rounded-full px-7 py-3 mb-4">
        <BaseInput v-model="form.password" required password class="input-signin" name="password" placeholder="Password" label="" />
      </div>
      <button class="hidden" @click="actionLogin" />
      <div class="text-xs text-center mb-10">Lupa password? <p class="text-xs text-blue-4 font-bold inline-block cursor-pointer" @click="$emit('action', 'forgot-password')">Klik disini</p></div>

      <BaseButton :disabled="disabled" class="w-full desktop:text-lg mobile:w-full">Lanjutkan</BaseButton>
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
        // email: 'kurukururuu@gmail.com',
        password: 'Test1234'
      },
      error: null
    }
  },
  methods: {
    async actionLogin() {
      this.disabled = true
      try {
        const form = {...this.form, ...this.$store.state.user.formLogin}
        const response = await this.$auth.loginWith('local', {data: form})
        
        if (response.status >= 200 && response.status < 300) {
          if (response.data.message === 'Akun belum terverifikasi.') {
            this.$store.dispatch('SET_VERIFY_DATA', {...this.form, ...this.$store.state.user.formLogin})
            this.$emit('cancel')
            this.$emit('action', 'verify-email')
            // this.error = {
            //   title: response.data.message
            // }
          } else {
            this.$emit('cancel')
            // this.setCleverTapUser() // minus identity from API, so disabled for now.
            if (this.$route.query.callbackAction) {
              this.$emit('finish-login', this.$route.query.callbackAction)
            }
          }
        } else {
          console.log({response})
          this.error = {
            title: response.data.message
          }
        }
      } catch (error) {
        console.log({error})
        const err = error.response
        this.error = {
          title: err.data.message
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

<style lang="scss">
.input-signin {
  @apply bg-transparent w-full text-sm focus:outline-none;

  margin-bottom: 0 !important;

  input {
    border: none !important;
  }
}
</style>