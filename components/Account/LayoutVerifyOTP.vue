<template>
  <div class="text-white layout-login-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$emit('cancel')" />
      <div class="text-xl font-bold mobile:text-lg">Verifikasi Kode OTP</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$emit('cancel')" />
    </div>

    <div class="text-xs mb-2">Masukkan kode otp yang sudah dikirim ke nomor ponsel kamu</div>
    <div class="text-sm font-bold mb-6">{{ $store.state.user.verifyData.phone }}</div>
    
    <FormErrorMessage :data="error" />

    <form ref="form" class="mb-6" @submit.prevent="actionSubmit">
      <div class="border border-opacity-50 rounded-full px-7 py-3 mb-8">
        <input v-model="form.otp" required maxlength="6" type="text" class="bg-transparent w-full text-sm tracking-widest font-bold text-center focus:outline-none" @keydown="validateOTP">
      </div>

      <div class="text-center mb-6">Belum dapat kode? Kirim ulang dalam
        <span v-if="countdown" class="text-blue-4 font-bold">
          {{ minutes | two_digits }} : {{ seconds | two_digits }}
        </span>
        <button v-else class="text-blue-4 font-bold" @click="resendOTP">KIRIM ULANG</button>
      </div>

      <!-- <div class="text-center mb-6">Belum dapat kode? Kirim ulang dalam <span class="text-blue-4 font-bold">{{ minutes | two_digits }} : {{ seconds | two_digits }}</span></div> -->
      
    </form>
    <BaseButton :disabled="disabled" class="w-full desktop:text-lg mobile:w-full mobile:mt-auto" @click="actionClick">Verifikasi</BaseButton>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import validateOTP from '~/assets/js/helper/validateOTP'

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
      validateOTP,
      disabled: false,
      two_digits: 0,
      form: {},
      endTime: new Date(),
      verify: false,
      countdown: true,
      now: Math.trunc((new Date()).getTime() / 1000),
      // error: null,
      OTPCode: null
    }
  },
  computed: {
    error() {
      if (!this.$store.state.user.errorMessage) {
        return null
      }
      
      return {
        title: this.$store.state.user.errorMessage
      }
    },
    // endTime() {
    //   // dummy
    //   const today = new Date();
    //   today.setMinutes(today.getMinutes() + 5);

    //   return today.toString()
    // },
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
    // 'form.otp'(newVal) {
    //   if (newVal.length === 6) {
    //     this.actionSubmit()
    //   }
    // }
  },
  mounted() {
    window.otp = this
    this.getOTP()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    async getOTP() {
      const response = await this.$store.dispatch('user/getOTP', {phone: this.$store.state.user.verifyData.phone})
      console.log(!!response, {response})
      if (response) {
        this.OTPCode = response.data
        this.setEndTime(new Date())
        this.initCountdown()
      } else {
        alert(response.data.message)
      }
    },
    resendOTP() {
      this.getOTP()
    },
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
      // const today = new Date();
      date.setMinutes(date.getMinutes() + 5);
      // date.setSeconds(date.getSeconds() + 5);

      this.endTime = date.toString()
      // console.log('set end', this.endTime, this.now)
      this.initCountdown()
    },
    actionClick() {
      this.$refs.form.requestSubmit()
    },
    async actionSubmit() {
      // if (this.form.otp === this.OTPCode) {
      const response = await this.$store.dispatch('user/verifyOTP', {phone: this.$store.state.user.formLogin.phone, code: this.form.otp})
      console.log('res', response)
      // if (response.success) {

      // }
      // } else {
      //   this.error = {
      //     title: 'Kode OTP yang kamu masukkan salah',
      //     subtitle: 'Pastikan kode OTP yang kamu masukkan sudah benar'
      //   }
      // }
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>