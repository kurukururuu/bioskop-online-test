<template>
  <div class="text-white layout-login-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$emit('cancel')" />
      <div class="text-xl font-bold mobile:text-lg">Masuk dengan</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$emit('cancel')" />
    </div>

    <!-- <div class="text-xs mb-6">Silahkan masuk ke akun kamu menggunakan Nomor Ponsel atau <span class="italic">Email</span></div> -->

    <div class="grid grid-cols-2 gap-4">
      <!-- <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2"> -->
        <button class="flex items-center px-3 py-2 rounded-full hover:bg-blue-2"
          @click="$auth.loginWith('google', { params: { prompt: 'select_account' } })">
          <GoogleIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Google</div>
        </button>
      <!-- </BaseButton> -->
      <!-- <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2"> -->
        <button class="flex items-center px-3 py-2 rounded-full hover:bg-blue-2"
          @click="$auth.loginWith('facebook')">
          <FacebookIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Facebook</div>
        </button>
      <!-- </BaseButton> -->
    </div>

    <div class="text-center border-b border-opacity-20 mt-4 mx-5 text-white my-6" style="line-height: 0.1em;">
      <span class="bg-blue-1 pt-0 px-3 text-xs" style="line-height: unset;">Atau</span>
    </div>

    <FormErrorMessage :data="error" />

    <form class="mb-6" @submit.prevent="actionCheckUsername">
      <div class="border border-opacity-50 rounded-full px-7 py-3 mb-4">
        <input v-model="form.emailOrPhone" required class="input-signin" name="username" placeholder="Nomor Ponsel / Email">
      </div>
      <!-- <div v-if="isAvailable" class="border border-opacity-50 rounded-full px-7 py-3 mb-4">
        <BaseInput v-model="form.password" required password class="input-signin" name="password" placeholder="Password" label="" />
      </div> -->
      <BaseButton :disabled="disabled" class="w-full desktop:text-lg mobile:w-full">Masuk</BaseButton>
    </form>

    <div class="text-center text-xs cursor-pointer" @click="$emit('action', 'sign-up')">Belum punya akun? <span class="font-bold text-blue-4">DAFTAR</span></div>
    
    <!-- <BaseButton :disabled="disabled" class="desktop:hidden mobile:w-full mt-auto">Masuk</BaseButton> -->
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
      form: {
        emailOrPhone: 'kurukururuu@gmail.com',
        // password: 'Test1234'
      },
      isAvailable: false,
      error: null
    }
  },
  mounted() {
    window.signin = this
  },
  methods: {
    async actionCheckUsername() {
      this.error = null
      // if (this.isAvailable) {
      //   console.log('action login...')
      //   this.disabled = true
      //   try {
      //     await this.$auth.loginWith('local', {data: this.form})
      //     this.$emit('cancel')
      //     // this.setCleverTapUser() // minus identity from API, so disabled for now.
      //     if (this.$route.query.callbackAction) {
      //       this.$emit('finish-login', this.$route.query.callbackAction)
      //     }
      //   } catch (error) {
      //     console.log({error})
      //     const err = error.response
      //     this.error = {
      //       title: err.data.message
      //     }
      //   } finally {
      //     this.disabled = false
      //   }
      // } else {
      //   const isEmail = (/^[a-zA-Z0-9.!#$%&‘*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(this.form.email)
      //   const isMobile = (/^(^\+62|^08)\d{8,12}$/).test(this.form.email)
      //   if (isEmail) {
      //     // TODO: check to API, verified or no
      //     this.isAvailable = true
      //   } else if (isMobile) {
      //     this.$emit('cancel')
      //     this.$emit('action', 'otp')
      //   } else {
      //     this.error = {
      //       title: 'Silahkan isi hanya dengan email / nomor HP'
      //     }
      //   }
      // }
      
      try {
        const isEmail = (/^[a-zA-Z0-9.!#$%&‘*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(this.form.emailOrPhone)
        const isMobile = (/^(^\+62|^08)\d{8,12}$/).test(this.form.emailOrPhone)
        let response = false
        let form = {}
        if (isEmail) {
          form = {email: this.form.emailOrPhone}
          response = await this.$store.dispatch('user/checkEmailVerified', {email: this.form.emailOrPhone})
        } else if (isMobile) {
          form = {phone: this.form.emailOrPhone}
          response = await this.$store.dispatch('user/checkPhoneVerified', {phone: this.form.emailOrPhone})
        }
        this.$store.commit('user/SET_FORM_LOGIN', form)
        this.$store.commit('user/SET_VERIFY_DATA', form)

        console.log({response})
        if (response.data.password && response.data.verified) {
          this.$emit('action', 'input-password')
        } else {
          const action = isEmail ? 'verify-email' : isMobile ? 'otp' : null
          console.log('act', action)
          if (action) {
            this.$emit('action', action)
          } else {
            this.error = {
              title: 'Silahkan isi hanya dengan email / nomor HP'
            }
          }
        }
      } catch (error) {
        
      }
    },
    setCleverTapUser() {
      // with the exception of one of Identity, Email, or FBID
      // each of the following fields is optional
      const user = this.$auth.user
      window.clevertap.onUserLogin.push({
      "Site": {
        "Name": user.name,            // String
        "Identity": 61026032,         // String or number
        "Email": user.email,          // Email address of the user
        "Phone": user.phone,          // Phone (with the country code)
        "Gender": user.gender,        // Can be either M or F
        "DOB": user.dob,              // Date of Birth. Date object
        // optional fields. controls whether the user will be sent email, push etc.
        "MSG-email": true,            // Disable email notifications
        "MSG-push": true,             // Enable push notifications
        "MSG-sms": true,              // Enable sms notifications
        "MSG-whatsapp": true,         // Enable WhatsApp notifications
      }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-login-wrapper {
    // width: 500px;
    width: fit-content;
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