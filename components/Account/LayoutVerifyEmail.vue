<template>
  <div class="text-white layout-verify-wrapper">
    <div class="flex justify-end items-center mb-4 mobile:justify-start">
      <!-- <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$emit('cancel')" />
      <div class="text-xl font-bold mobile:text-lg">Verifikasi Kode OTP</div> -->
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer" @click="$emit('cancel')" />
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
        <button v-else class="text-blue-4 font-bold" @click="setEndTime(new Date())">KIRIM ULANG</button>
      </div>

      <div class="text-xs mb-5">Pakai nomor ponsel? <button @click="actionUseOTP"><span class="text-blue-4 font-bold">OTP</span></button></div>
    </div>
    <div v-else class="flex flex-col items-center">
      <div class="text-sm mb-3">Email Kamu belum terverifikasi</div>
      <div class="p-2 text-red-secondary bg-red-secondary bg-opacity-20 border border-red-secondary border-opacity-50 rounded-full flex justify-center mb-16">
        <ErrorIcon width="20" height="20" class="mr-1" />
        <span class="font-bold">{{ $store.state.user.verifyData.email }}</span>
      </div>
    <BaseButton :disabled="disabled" class="w-full desktop:text-lg mobile:w-full mobile:mt-auto" @click="verify = true">Verifikasi</BaseButton>
    </div>
  </div>
</template>

<script>
// import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import validateOTP from '~/assets/js/helper/validateOTP'
import ErrorIcon from '~/assets/icons/ErrorWarning.svg?inline'

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
    // ChevronRight,
    ErrorIcon,
    XIcon,
  },
  props: {
    email: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      validateOTP,
      disabled: false,
      form: {},
      two_digits: 0,
      endTime: new Date(),
      verify: false,
      countdown: true,
      now: Math.trunc((new Date()).getTime() / 1000),
    }
  },
  computed: {
    // endTime() {
    //   // dummy
    //   const today = new Date();
    //   // today.setMinutes(today.getMinutes() + 5);
    //   today.setSeconds(today.getSeconds() + 10);

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
  },
  mounted() {
    this.setEndTime(new Date())
    this.init()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    init() {
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
      date.setMinutes(date.getMinutes() + 1);
      // date.setSeconds(date.getSeconds() + 5);

      this.endTime = date.toString()
      // console.log('set end', this.endTime, this.now)
      this.init()
    },
    actionUseOTP() {
      this.$emit('cancel')
      this.$emit('action', 'otp')
    },
    actionSubmit() {

    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-verify-wrapper {
    // width: 500px;
    width: 400px;
    @apply bg-blue-1 p-8 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-verify-wrapper {
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