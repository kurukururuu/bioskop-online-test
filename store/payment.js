const INITIAL_STATE = {
  paymentMethods: [],
  selectedPaymentMethod: null,
  calculation: {},
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_PAYMENT_METHODS: (state, payload) => {
    state.paymentMethods = payload
  },
  SET_SELECTED_PAYMENT_METHOD: (state, payload) => {
    state.selectedPaymentMethod = payload
  },
  SET_CALCULATION: (state, payload) => {
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
  selectPaymentMethod({ commit }, { code }) {
    commit('SET_SELECTED_PAYMENT_METHOD', code)
  },
  async calculatePrice(
    { commit },
    { code, idTitle, idSeries, idPackage, voucherCode }
  ) {
    commit('SET_CALCULATION', null)
    try {
      const response = await this.$axios.$post(
        `${process.env.API_URL}/payment/calculate`,
        {
          code,
          additionals: {
            id_title: idTitle,
            id_series: idSeries,
            id_package: idPackage,
            voucher_code: voucherCode,
          },
        }
      )
      commit('SET_CALCULATION', response.data)
    } catch (err) {
      console.error({ err })
    }
  },
}
