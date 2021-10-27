/* eslint-disable no-console */
import Film from '~/assets/js/models/Film'

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
    const data = state.banners
    const film = new Film()
    const films = []
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      films.push(film.createItem(element.title))
    }
    return films
  },
  listings: (state) => {
    const filtered = state.listings.filter((listing) => !!listing && listing.items.length > 0)
    const film = new Film()
    const list = []
    for (let i = 0; i < filtered.length; i++) {
      const element = filtered[i];
      const obj = {}
      if (!element) continue
      obj.title = element.name
      obj.type = element.type
      obj.films = []
      for (let j = 0; j < element.items.length; j++) {
        const item = element.items[j];
        obj.films.push(film.createItem(item))
      }
      list.push(obj)
    }
    return list
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
