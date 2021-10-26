const INITIAL_STATE = {
  banners: [],
  listings: [],
  detail: null,
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_BANNERS: (state, payload) => {
    state.banners = payload
  },
  SET_LISTINGS: (state, payload) => {
    state.listings = payload
  },
}

export const getters = {
  banners: (state) => {
    return state.banners
  },
  listings: (state) => {
    return state.listings.filter((listing) => listing.items.length > 0)
  },
}

export const actions = {
  async fetchBanners({ commit }) {
    try {
      const response = await this.$axios.$get(
        `${process.env.API_URL}/video/banner?page=1&limit=6`
      )
      commit('SET_BANNERS', response.data)
    } catch (err) {
      console.error({ err })
    }
  },
  async fetchListings({ commit }) {
    try {
      const response = await this.$axios.$get(
        `${process.env.API_URL}/video/tag?page=1&limit=6&type=`
      )
      if (response.data && response.data.length > 0) {
        const responses = await Promise.all(
          response.data.map((listing) =>
            this.$axios.$get(
              `${process.env.API_URL}/video/tag/detail?limit=6&hashed_id=${listing.hashed_id}`
            )
          )
        )
        commit(
          'SET_LISTINGS',
          responses.map((r) => r.data)
        )
      }
    } catch (err) {
      console.error({ err })
    }
  },
}
