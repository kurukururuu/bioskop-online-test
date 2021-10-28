/* eslint-disable no-console */
import Film from '~/assets/js/models/Film'

export const CONTENT_TYPE = {
  FILM: 'film',
  SERIES: 'series',
  PACKAGE: 'package',
}

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
  SET_DETAIL: (state, payload) => {
    state.detail = payload
  },
}

export const getters = {
  banners: (state) => {
    const data = state.banners
    const film = new Film()
    const films = []
    for (let i = 0; i < data.length; i++) {
      const element = data[i]
      films.push(film.createItem(element.title))
    }
    return films
  },
  listings: (state) => {
    const filtered = state.listings.filter(
      (listing) => !!listing && listing.items.length > 0
    )
    const film = new Film()
    const list = []
    for (let i = 0; i < filtered.length; i++) {
      const element = filtered[i]
      const obj = {}
      if (!element) continue
      obj.title = element.name
      obj.type = element.type
      obj.films = []
      for (let j = 0; j < element.items.length; j++) {
        const item = element.items[j]
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
  async fetchDetail({ commit }, { type, hashedId }) {
    const handler = {
      [CONTENT_TYPE.FILM]: async (hashedId) => {
        const response = await this.$axios.$get(
          `${process.env.API_URL}/video/title?hashed_id=${hashedId}`
        )
        const wishlistResponse = await this.$axios.get(
          `${process.env.API_URL}/history/wishlist/${hashedId}`,
          { validateStatus: () => true }
        )
        commit('SET_DETAIL', {
          ...response.data,
          type: CONTENT_TYPE.FILM,
          wishlist:
            wishlistResponse.status >= 200 && wishlistResponse.status < 300,
        })
      },
      [CONTENT_TYPE.SERIES]: async (hashedId) => {
        const response = await this.$axios.$get(
          `${process.env.SERIES_API_URL}/series-hashed/${hashedId}`
        )
        const accessResponse = await this.$axios.get(
          `${process.env.API_URL}/video/series/access?hashed_id=${hashedId}`,
          { validateStatus: () => true }
        )
        const defaultSeasonId =
          response.data.seasons[response.data.seasons.length - 1].hashed_id // Always use latest season
        const episodesResponse = await this.$axios.get(
          `${process.env.SERIES_API_URL}/series-hashed/${hashedId}/seasons/${defaultSeasonId}/episodes`,
          {
            validateStatus: () => true,
          }
        )
        let episodes = []
        if (episodesResponse.status >= 200 && episodesResponse.status < 300) {
          episodes = episodesResponse.data.data
          episodes.sort((a, b) => {
            if (a.created_at < b.created_at) {
              return -1
            }
            if (a.created_at > b.created_at) {
              return 1
            }
            return 0
          })
        }
        commit('SET_DETAIL', {
          ...response.data,
          type: CONTENT_TYPE.SERIES,
          paid: accessResponse.status >= 200 && accessResponse.status < 300,
          episodes,
        })
      },
    }
    commit('SET_DETAIL', null)
    try {
      if (!handler[type]) {
        throw new Error('Content type should be "film" or "series"')
      }
      await handler[type](hashedId)
    } catch (err) {
      console.error({ err })
    }
  },
}
