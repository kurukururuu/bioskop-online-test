import PaymentMethod from "~/assets/js/models/PaymentMethod"

const INITIAL_STATE = {
  paymentMethods: [],
  selectedPaymentMethod: null,
  invoice: null,
  calculation: {},
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_PAYMENT_METHODS (state, payload) {
    state.paymentMethods = payload
  },
  SET_SELECTED_PAYMENT_METHOD: (state, payload) => {
    state.selectedPaymentMethod = payload
  },
  SET_CALCULATION: (state, payload) => {
    state.calculation = payload
  },
}

export const getters = {
  validPaymentMethods: (state, price) => {
    const list = state.paymentMethods.filter(
      (paymentMethod) =>
        !paymentMethod.minimum_value ||
        (!!paymentMethod.minimum_value && paymentMethod.minimum_value <= price)
    )

    const categories = []
    const bigMethods = [{name: 'mdt-qris', img: '/dummy/payment-e-wallet.png'}, {name: 'mdt-cc', img: '/dummy/payment-cc.png'}]

    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const found = categories.find(v => v.title === item.category)
      const bigMethod = bigMethods.find(v => v.name === item.code)
      if (!found) {
        categories.push({
          title: item.category,
          big: !!bigMethod,
          img: bigMethod ? bigMethod.img : '',
          methods: [{
            code: item.code,
            title: item.name,
            icon: item.image_url
          }]
        })
      } else {
        found.methods.push({
          code: item.code,
          title: item.name,
          icon: item.image_url
        })
      }
    }

    // create item for each category
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const paymentMethod = new PaymentMethod()
      paymentMethod.createItem(category)
    }

    // swap category QRIS & CC array position if both available
    const qrisFound = categories.findIndex(v => v.title === 'E-Wallet')
    const ccFound = categories.findIndex(v => v.title === 'Credit Card')
    if (qrisFound !== -1 && ccFound !== -1) {
      console.log('qris & cc available')
      categories[qrisFound] = categories.splice(ccFound, 1, categories[qrisFound])[0]
      console.log({categories})
    }

    return categories
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
  selectPaymentMethod({ commit }, { code } = {}) {
    commit('SET_SELECTED_PAYMENT_METHOD', code)
    // perlukah manggil calculate price disini?
  },
  async calculatePrice(
    { commit },
    { code, idTitle, idSeries, idPackage, voucherCode } = {}
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
  issuePayment(
    { commit, state },
    { code, idTitle, idSeries, idPackage, voucherCode, phone, email } = {}
  ) {
    if (state.calculation) {
      console.log({ calculation: state.calculation })
    }
  },
}
