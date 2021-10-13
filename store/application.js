export const state = () => ({
  payment: {},
  paymentMethod: []
})


export const mutations = {
  SET_PAYMENT (state, payload) {
    state.payment = {...state.payment, ...payload}
  },
  RESET_PAYMENT (state, payload) {
    state.payment = {}
  },
  SET_PAYMENT_METHOD (state, payload) {
    state.paymentMethod = payload
  },
}