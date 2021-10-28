import moment from 'moment'

const INITIAL_STATE = {
  errorMessage: null,
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_ERROR_MESSAGE: (state, payload) => {
    state.errorMessage = payload
  },
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
}
