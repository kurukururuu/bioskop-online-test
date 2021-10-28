const INITIAL_STATE = {
  paymentMethod: {},
  itemDetails: {}
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_PAYMENT (state, payload) {
    state.paymentMethod = {...state.paymentMethod, ...payload}
  },
  RESET_PAYMENT (state, payload) {
    state.paymentMethod = {}
  },
  SET_DETAILS (state, payload) {
    state.itemDetails = {...state.itemDetails, ...payload}
  },
  RESET_DETAILS (state, payload) {
    state.itemDetails = {}
  },
}