<template>
  <div class="text-white layout-login-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$emit('cancel')" />
      <div class="text-xl font-bold mobile:text-lg">Lupa Password</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$emit('cancel')" />
    </div>

    <div v-if="verify" class="flex flex-col items-center text-center">
      <div class="font-bold mb-3">Menunggu verifikasi email</div>
      <div class="text-xs">Verifikasi dikirm ke email :</div>
      <div class="bg-blue-2 bg-opacity-20 p-2 flex justify-center font-bold rounded-full mb-3">
        {{ $store.state.user.verifyData.email }}
      </div>
      <div class="text-xs mb-6">Cek notifikasi email kamu kemudian <br>lakukan verifikasi</div>
      <div class="text-xs mb-5">Belum menerima email verifikasi? 
        <span v-if="countdown" class="text-blue-4 font-bold">
          {{ minutes | two_digits }} : {{ seconds | two_digits }}
        </span>
        <button v-else class="text-blue-4 font-bold" @click="actionForgotPass() && setEndTime(new Date())">KIRIM ULANG</button>
      </div>

      <div class="text-xs mb-5">Pakai nomor ponsel? <button @click="actionUseOTP"><span class="text-blue-4 font-bold">OTP</span></button></div>
    </div>

    <template v-else>
      <div class="text-xs mb-9">Masukan email atau nomor ponsel untuk membuat <br>password baru</div>

      <FormErrorMessage :data="error" />

      <form class="mb-6" @submit.prevent="actionForgotPass">
        <div class="border border-opacity-50 rounded-full px-7 py-3 mb-4">
          <input v-model="form.emailOrPhone" required class="input-signin" name="username" placeholder="Nomor Ponsel / Email">
        </div>

        <BaseButton :disabled="disabled" class="w-full desktop:text-lg mobile:w-full">Kirim</BaseButton>
      </form>
    </template>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  filters: {
    two_digits(value) {
      if (value < 0) {
        return '00';
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    }
  },
  components: {
    ChevronRight,
    XIcon,
  },
  data() {
    return {
      disabled: false,
      verify: false,
      form: {
        emailOrPhone: '',
      },
      error: null,
      countdown: true,
      endTime: new Date(),
      now: Math.trunc((new Date()).getTime() / 1000),
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.endTime) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
  },
  watch: {
    now(newVal) {
      if (this.minutes <= 0 && this.seconds <= 0) {
        this.countdown = false
        clearInterval(this.interval)
      }
    },
    verify(newVal) {
      if (newVal) {
        this.setEndTime(new Date())
        this.initCountdown()
      }
    }
  },
  methods: {
    initCountdown() {
      if (setInterval) {
        this.interval = setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
        this.countdown = true
      }
    },
    setEndTime(date) {
      // dummy
      date.setMinutes(date.getMinutes() + 1);

      this.endTime = date.toString()
      this.initCountdown()
    },
    actionUseOTP() {
      this.$emit('cancel')
      // this.$emit('action', 'sign-in')
    },
    async actionForgotPass() {
      this.disabled = true
      this.error = null
      try {
        const isEmail = (/^[a-zA-Z0-9.!#$%&‘*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(this.form.emailOrPhone)
        const isMobile = (/^(^\+62|^08)\d{8,12}$/).test(this.form.emailOrPhone)
        let form = {}
        if (isEmail) {
          form = {email: this.form.emailOrPhone}
        } else if (isMobile) {
          form = {phone: this.form.emailOrPhone}
        }
        await this.$store.dispatch('user/actionForgotPass', form)
        this.verify = true
      } catch (error) {
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

<style lang="scss">
.input-signin {
  @apply bg-transparent w-full text-sm focus:outline-none;

  margin-bottom: 0 !important;

  input {
    border: none !important;
  }
}
</style>