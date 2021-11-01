<template>
  <div class="min-h-screen film-page">
    <div class="header-cover"
    :style="`background-image:url(${cover.landscape})`">
      <div class="overlay" />
    </div>

    <div class="container mx-auto">
      <FilmInfo :data="data" class="relative -top-52 mb-7 z-10 mobile:top-0" @action="handleAction" />

      <template v-if="films.length > 0">
        <div class="text-lg font-bold mb-7 mobile:mb-4">Akan Datang</div>
        <SwiperComponent :data="films"
          class="mb-32" @item-clicked="v => $router.push(`/film/${v.id}`)" />
      </template>
    </div>

    <Modal name="payment-modal"
      classes="modal-classes m-auto"
      height="auto"
      scrollable>
      <PaymentStepOne v-if="paymentStep === 1" @cancel="cancelPayment" @next="paymentStep = 2" />
      <PaymentStepTwo v-if="paymentStep === 2" :list="listPaymentMethod" @cancel="cancelPayment" @next="paymentStep = 3" />
      <PaymentStepThree v-if="paymentStep === 3" :list="listPaymentMethod" @cancel="cancelPayment" @next="paymentStep = 4" @prev="paymentStep = 2" />
      <PaymentStepFour v-if="paymentStep === 4" :list="listPaymentMethod" @cancel="$modal.hide('payment-modal')" @abort="abortPayment" @error="errorPayment" />
    </Modal>

    <Modal name="abort-payment"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <PaymentCancelLayout @close="$modal.hide('abort-payment')" @confirm="confirmAbortPayment" />
    </Modal>

    <Modal name="payment-aborted"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <PaymentCanceledLayout @close="handlePaymentAborted" @retry="retryPayment" />
    </Modal>

    <Modal name="payment-error"
      :click-to-close="false"
      classes="modal-classes full-height"
      width="400px"
      height="auto"
      scrollable>
      <PaymentErrorPayment @close="$modal.hide('payment-error')" />
    </Modal>
  </div>
</template>

<script>
// import Film from '~/assets/js/models/Film'
// import PaymentMethod from '~/assets/js/models/PaymentMethod'

export default {
  data() {
    return {
      paymentStep: 1,
    }
  },
  async fetch({store, params}) {
    await store.dispatch('content/fetchDetail', {type: 'film', hashedId: params.uid})

    const genres = store.state.content.detail.genres
    for (let i = 0; i < genres.length; i++) {
      const genre = genres[i];
      await store.dispatch('content/fetchOtherList', {hashed_id: genre.hashed_id})
      // if (store.state.content)
    }
    
  },
  computed: {
    data() {
      // const film = new Film()
      // return film.createDummy()
      return this.$store.getters['content/detail']
    },
    films() {
      // const films = []
      // const film = new Film()
      // for (let i = 0; i < 15; i++) {
      //   films.push(film.createDummy())
      // }
      // return films
      const data = this.$store.getters['content/otherList']
      const list = []
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.id !== this.$route.params.uid) {
          list.push(element)
        }
      }
      return list
    },
    listPaymentMethod() {
      // dummy
      // const paymentMethod = new PaymentMethod()
      // return paymentMethod.createDummyList()

      return this.$store.getters['payment/validPaymentMethods']
    },
    cover() {
      return this.data.cover || {}
    }
  },
  mounted() {
    window.slugFilm = this
    window.addEventListener('action', this.handleAction)
  },
  beforeDestroy() {
    window.removeEventListener('action', this.handleAction)
  },
  methods: {
    handleAction(v) {
      const act = v.detail || v
      switch (act) {
        case 'buy-ticket':
          this.fetchPaymentMethods()
          this.$modal.show('payment-modal')
      }
    },
    fetchPaymentMethods() {
      this.$store.dispatch('payment/fetchPaymentMethods')
    },
    cancelPayment() {
      this.$modal.hide('payment-modal')
      this.paymentStep = 1
    },
    abortPayment() {
      this.$modal.show('abort-payment')
    },
    errorPayment() {
      this.cancelPayment()
      this.$modal.show('payment-error')
    },
    confirmAbortPayment() {
      this.$modal.hide('abort-payment')
      this.$modal.show('payment-aborted')
      // this.cancelPayment()
      // and do another thing to abort payment
    },
    retryPayment() {
      this.paymentStep = 1
      this.$modal.hide('payment-aborted')
      this.$modal.show('payment-modal')
    },
    handlePaymentAborted() {
      this.$modal.hide('payment-aborted')
      this.cancelPayment()
    }
  }
}
</script>

<style lang="scss" scoped>
.film-page {
  .header-cover {
    @apply relative;
    @apply bg-no-repeat bg-cover;

    height: 50vh;

    @media (max-width: 768px) {
      height: 20vh;
    }
    
    .overlay {
      @apply absolute w-full h-full top-0 left-0 z-10;
      @apply bg-gradient-to-t to-transparent;

      // this is extended theme color: from-black-opa-50
      // but somehow apply doesn't work for extended theme, but plugin does
      --tw-gradient-from: #011228;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(1, 18, 40, 0.1));
    }
  }
}
</style>