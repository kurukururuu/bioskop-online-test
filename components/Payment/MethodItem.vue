<template>
  <div>
    <div class="text-xs font-bold opacity-50 mb-3 uppercase">{{ data.title }}</div>
    <!-- {{data}} -->
    <div class="grid grid-cols-2 gap-5">
        <!-- :class="big ? 'flex justify-between w-full mb-2 hover:payment-item cursor-pointer' : 'col-span-1 flex justify-between hover:payment-item cursor-pointer'" -->
      <label v-for="(method,i) in data.methods" :key="i"
        for="payment-method"
        class="flex justify-between hover:payment-item cursor-pointer"
        :class="big ? 'col-span-2' : 'col-span-1'"
        @click="$emit('choose', method)">
        <div class="flex items-center">
          <img :src="method.icon" alt="data.title" class="w-6 mr-3">
          <div class="text-sm font-bold uppercase hover:text-blue-4 mobile:text-xs">{{ method.title }}</div>
        </div>
        <BaseInput :id="`method-${method}`" radio required label="" name="payment-method" class="w-5 flex items-center" :checked="isSelected(method)" />
      </label>
    </div>

    <div v-if="big || data.title === 'E-Wallet'" class="flex justify-center w-full mt-2">
      <img :src="data.img" alt="e-wallet">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    },
    big: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data (){
    return {
      // big: false,
      form: {},
      sel: null
    }
  },
  mounted() {
    window.ite = this
  },
  methods: {
    isSelected(method) {
      // return this.$store.state.transaction.paymentMethod === method
      return this.$store.state.payment.selectedPaymentMethod === method.code 
    }
  }
}
</script>

<style lang="scss">
.hover\:payment-item:hover {
  @apply text-blue-4;
  
  .radio {
    @apply bg-opacity-100;
  }
}
</style>