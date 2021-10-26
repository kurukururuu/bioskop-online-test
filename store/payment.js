const INITIAL_STATE = {
  paymentMethods: [],
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_PAYMENT_METHODS: (state, payload) => {
    state.paymentMethods = payload
  },
}

export const getters = {
  validPaymentMethods: (state, price) => {
    return state.paymentMethods.filter(
      (paymentMethod) =>
        !paymentMethod.minimum_value ||
        (!!paymentMethod.minimum_value && paymentMethod.minimum_value <= price)
    )
  },
}

export const actions = {
  async fetchPaymentMethods({ commit }) {
    try {
      const response = await this.$axios.$get(
        `${process.env.API_URL}/payment/payment-method`,
        {
          headers: {
            platform: this.$device.isMobileOrTablet ? 'web_mobile' : 'web',
          },
        }
      )
      commit('SET_PAYMENT_METHODS', response.data)
    } catch (err) {
      console.error({ err })
    }
  },
}
