<template>
  <div class="flex flex-col rounded-2xl desktop:w-fit-content bg-blue-1 p-8">
    <div class="flex items-center justify-between mb-10">
      <div class="text-xl font-bold">Daftar dengan</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer ml-auto" @click="$emit('cancel')" />
    </div>

    <div class="grid grid-cols-2 gap-2">
      <!-- <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2"> -->
        <button class="flex items-center px-3 py-2 hover:bg-blue-2">
          <GoogleIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Google</div>
        </button>
      <!-- </BaseButton> -->
      <!-- <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2"> -->
        <button class="flex items-center px-3 py-2 hover:bg-blue-2">
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
    
    <div class="flex items-center p-2 bg-red-secondary bg-opacity-20 border-red-secondary border-opacity-50 rounded-lg mb-6">
      <ErrorIcon width="20" height="20" class="mr-1" />
      <div v-if="error">
        <div class="text-xxs font-bold">{{ error.title }}</div>
        <div class="text-2xxs text-gray-400">{{ error.subtitle }}</div>
      </div>
    </div>

    <form @submit.prevent="actionRegister">
      <BaseInput v-model="form.name" required :error="error.type === 'name'" label="Nama Lengkap" name="name" />
      <BaseInput v-model="form.phone" required :error="error.type === 'phone'" label="Nomor Telepon" name="phone" type="number" />
      <BaseInput v-model="form.email" required :error="error.type === 'email'" label="Alamat Email" name="email" type="email" />
      <BaseInput v-model="form.password" password required :error="error.type === 'password'" label="Buat Password" name="password" type="password" helper-text="Min. 7 karakter berupa kombinasi angka, huruf besar dan huruf kecil" />
      
      <BaseButton class="w-full mb-2 mt-11 mobile:w-full">Selesai</BaseButton>
    </form>
    <BaseButton dark class="w-full border border-blue-4 mobile:w-full" @click="actionRegister">Lanjut lengkapi biodata</BaseButton>
  </div>
</template>

<script>
// import ArrowCircleRight from '~/assets/icons/ArrowCircleRight.svg?inline'
import ErrorIcon from '~/assets/icons/ErrorWarning.svg?inline'
import FacebookIcon from '~/assets/icons/Facebook.svg?inline'
import GoogleIcon from '~/assets/icons/Google.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    // ArrowCircleRight,
    ErrorIcon,
    FacebookIcon,
    GoogleIcon,
    XIcon
  },
  data () {
    return {
      form: {},
      error: {
        // dummy
        title: 'Email yang kamu masukkan sudah terdaftar',
        subtitle: 'Pastikan email yang di masukkan belum terdaftar',
        type: 'email'
      }
    }
  },
  methods: {
    actionRegister() {
      console.log('action register')
      // dummy action
      this.$emit('cancel')
      this.$emit('finish-register')
    }
  }
}
</script>