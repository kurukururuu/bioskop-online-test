<template>
  <div class="min-h-screen container mx-auto">
    <PaymentInfo :data="item" class="mx-auto" />
  </div>
</template>

<script>
import HistoryPayment from '~/assets/js/models/HistoryPayment'

export default {
  computed: {
    item() {
      // dummy state after payment success.
      // use from store.state payment instead later.
      // this.$store.state.payment.details
      const hist = new HistoryPayment()
      return hist.createDummy()
    }
  }
}
</script>