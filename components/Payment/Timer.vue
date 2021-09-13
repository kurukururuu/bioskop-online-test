<template>
  <div class="flex flex-col items-center">
    <div class="text-sm">Sisa waktu pembayaran kamu</div>
    <div class="flex">
      <div>
        <div class="text-2xl text-blue-4 font-bold">{{ hours | two_digits }}</div>
        <div class="text-xxs text-blue-4 text-center font-semibold">Jam</div>
      </div>
      <div class="text-2xl text-blue-4 font-bold mx-4">
        :
      </div>
      <div>
        <div class="text-2xl text-blue-4 font-bold">{{ minutes | two_digits }}</div>
        <div class="text-xxs text-blue-4 text-center font-semibold">Menit</div>
      </div>
      <div class="text-2xl text-blue-4 font-bold mx-4">
        :
      </div>
      <div>
        <div class="text-2xl text-blue-4 font-bold">{{ seconds | two_digits }}</div>
        <div class="text-xxs text-blue-4 text-center font-semibold">Detik</div>
      </div>
    </div>
  </div>
</template>

<script>
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
  props: {
    endTime: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
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
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
  },
  mounted() {
    if (setInterval) {
      this.interval = setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
        console.log(this.now)
    },1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>