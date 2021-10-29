<template>
  <div class="flex flex-col rounded-2xl desktop:w-fit-content bg-blue-1 p-8">
    <div class="flex items-center justify-between mb-10">
      <div class="text-xl font-bold">Daftar dengan</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer ml-auto" @click="$emit('cancel')" />
    </div>

    <div class="grid grid-cols-2 gap-2">
      <!-- <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2"> -->
        <button class="flex items-center px-3 py-2 hover:bg-blue-2"
          @click="$auth.loginWith('google', { params: { prompt: 'select_account' } })">
          <GoogleIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Google</div>
        </button>
      <!-- </BaseButton> -->
      <!-- <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2"> -->
        <button class="flex items-center px-3 py-2 hover:bg-blue-2"
          @click="$auth.loginWith('facebook')">
          <FacebookIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Facebook</div>
        </button>
      <!-- </BaseButton> -->
    </div>
    <!-- <BaseButton dark class="mb-6 px-5 w-full mobile:w-full">
      <div class="mr-auto text-white">Buat Akun Bioskop Online</div>
      <ArrowCircleRight slot="post-icon" class="ml-auto my-3" fill="white" :width="24" :height="24" />
    </BaseButton> -->
    <div class="text-center border-b border-opacity-20 mt-6 mx-5 text-white mb-6" style="line-height: 0.1em;">
      <span class="bg-blue-1 pt-0 px-3">Atau</span>
    </div>
    
    <FormErrorMessage :data="error" />

    <form ref="form" @submit.prevent="actionRegister">
      <BaseInput v-model="form.first_name" required :error="error ? error.type === 'name' : false" label="Nama Lengkap" name="name" />
      <BaseInput v-model="form.phone" required :error="error ? error.type === 'phone' : false" label="Nomor Telepon" name="phone" type="text" />
      <BaseInput v-model="form.email" required :error="error ? error.type === 'email' : false" label="Alamat Email" name="email" type="email" />
      <BaseInput v-model="form.password" password required :error="error ? error.type === 'password' : false" label="Buat Password" name="password" type="password" helper-text="Min. 7 karakter berupa kombinasi angka, huruf besar dan huruf kecil" />
      
      <BaseButton class="w-full mb-2 mt-11 mobile:w-full">Selesai</BaseButton>
    </form>
    <BaseButton dark class="w-full border border-blue-4 mobile:w-full mb-8" @click="actionCompleteProfile">Lanjut lengkapi biodata</BaseButton>
  </div>
</template>

<script>
// import ArrowCircleRight from '~/assets/icons/ArrowCircleRight.svg?inline'
import FacebookIcon from '~/assets/icons/Facebook.svg?inline'
import GoogleIcon from '~/assets/icons/Google.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    // ArrowCircleRight,
    FacebookIcon,
    GoogleIcon,
    XIcon
  },
  data () {
    return {
      form: {},
      error: null
    }
  },
  mounted() {
    this.$store.commit('user/RESET_FORM_REGISTER')
  },
  methods: {
    async actionRegister() {
      console.log('action register')
      // dummy action
      // this.$emit('cancel')
      // this.$emit('finish-register')

      try {
        await this.$store.dispatch('user/actionRegister', this.form)
        this.$store.commit('user/SET_VERIFY_DATA', this.form)
        this.$emit('cancel')
        this.$emit('finish-register')
      } catch (error) {
        console.log({error})
        this.error = {
          title: error.message
        }
      }
    },
    actionCompleteProfile() {
      console.log('action complete profile')
      // dummy action
      // this.$emit('cancel')

      // this.$refs.form.requestSubmit()
      const valid = this.$refs.form.checkValidity()
      if (valid) {
        this.$store.commit('user/SET_FORM_REGISTER', this.form)
        this.$emit('complete-profile')
      } else {
        this.$refs.form.requestSubmit()
      }
    }
  }
}
</script>