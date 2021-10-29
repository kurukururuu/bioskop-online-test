import moment from 'moment'

const INITIAL_STATE = {
  errorMessage: null,
  formLogin: {},
  formRegister: {},
  verifyData: {}
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_ERROR_MESSAGE: (state, payload) => {
    state.errorMessage = payload
  },
  SET_FORM_LOGIN: (state, payload) => {
    state.formLogin = {...state.formLogin, ...payload}
  },
  RESET_FORM_LOGIN: (state, payload) => {
    state.formLogin = {}
  },
  SET_FORM_REGISTER: (state, payload) => {
    state.formRegister = {...state.formRegister, ...payload}
  },
  RESET_FORM_REGISTER: (state, payload) => {
    state.formRegister = {}
  },
  SET_VERIFY_DATA: (state, payload) => {
    state.verifyData = payload
  }
}

export const getters = {}

export const actions = {
  async register(
    { commit },
    { name, email, phone, password, gender, birthdate }
  ) {
    commit('SET_ERROR_MESSAGE', null)
    const formData = {
      first_name: name,
      email,
      phone,
      password,
      gender, // M or F
      birthdate: birthdate ? `${moment(birthdate).format('YYYY-MM-DD')}` : null,
    }
    try {
      const response = await this.$axios.post(
        `${process.env.API_URL}/auth/register`,
        formData,
        {
          headers: {
            platform: this.$device.isMobileOrTablet ? 'web_mobile' : 'web',
          },
          validateStatus: () => true,
        }
      )
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(true)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error('Tidak dapat melakukan registrasi'))
    }
  },
  async checkEmailVerified({commit}, payload) {
    try {
      const response = await this.$axios.get(
        `/user/email/verified?email=${payload.email}`
      )
      console.log({response})
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(true)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error('Tidak dapat melakukan pengecekan email'))
    }
  },
  async checkPhoneVerified({commit}, payload) {
    try {
      const response = await this.$axios.get(
        `/user/phone/${payload.phone}/password-ready`
      )
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(true)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error('Tidak dapat melakukan pengecekan email'))
    }
  },
  async getOTP({commit}, payload) {
    try {
      const response = await this.$axios.post(
        `/auth/phone`, {phone: payload.phone}
      )
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.data)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.log('asdasdasd', {err})
      // return {success: false, data: err.response.data}
      alert(err.response.data.message)
      return Promise.reject(new Error('Tidak dapat mengirimkan kode OTP'))
    }
  },
  async verifyOTP({commit}, payload) {
    try {
      const response = await this.$axios.post(
        `/auth/phone/verify/`, payload
      )
      console.log({response})
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.data)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.error({err})
      commit('SET_ERROR_MESSAGE', err.response.data.message)
      // return {success: false, data: err.response.data}
      // return Promise.reject(new Error('Tidak dapat melakukan verifikasi kode OTP'))
    }
  },
  async actionForgotPass({commit}, payload) {
    try {
      const response = await this.$axios.post(
        `/auth/password/reset`, payload
      )
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(true)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.error({err})
      return Promise.reject(new Error(err.response.data.message))
    }
  },
  async actionUpdatePassword({commit}, payload) {
    try {
      const response = await this.$axios.post(
        `/auth/password/update`, payload
      )
      console.log({response})
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(true)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.error({err})
      return Promise.reject(new Error(err.response.data.message))
    }
  },
  async actionRegister({commit}, payload) {
    try {
      const response = await this.$axios.post(
        `/auth/register`, payload
      )
      console.log({response})
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(true)
      } else {
        commit('SET_ERROR_MESSAGE', response.data.message)
        return Promise.reject(new Error(response.data.message))
      }
    } catch (err) {
      console.error({err})
      return Promise.reject(new Error(err.response.data.message))
    }
  }
}
