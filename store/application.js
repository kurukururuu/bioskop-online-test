
export const state = () => ({
  payment: {},
})


export const mutations = {
  SET_PAYMENT (state, payload) {
    state.payment = {...state.payment, ...payload}
  },
  RESET_PAYMENT (state, payload) {
    state.payment = {}
  },
}