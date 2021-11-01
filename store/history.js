/* eslint-disable no-console */
// import Film from '~/assets/js/models/Film'
import MyFilm from '~/assets/js/models/MyFilm'

export const CONTENT_TYPE = {
  FILM: 'film',
  SERIES: 'series',
  PACKAGE: 'package',
}

const INITIAL_STATE = {
  item: {},
  rents: [],
  wishlist: [],
  detail: null,
}

export const state = () => INITIAL_STATE

export const mutations = {
  SET_RENTS (state, n) {
    // console.log("comit", n)
    state.rents = n
  },
  SET_WISH(state, n) {
    state.wishlist = n;
  },
  SET_ITEM(state, n) {
    state.item = n;
  },
  SET_DETAIL: (state, payload) => {
    state.detail = payload
  },
}

export const getters = {
  rents: (state) => {
    const data = state.rents
    const myFilm = new MyFilm()
    const films = []
    for (let i = 0; i < data.length; i++) {
      const element = data[i]
      films.push(myFilm.createItem(element))
    }
    return films
  },
  wishlist: (state) => {
    const data = state.wishlist
    console.log('data', data)
    // const film = new Film()
    // const list = []
    // for (let i = 0; i < data.length; i++) {
    //   const element = data[i]
    //   console.log('el', element)
    //   list.push(film.createItem(element))
    // }
    return data
  }
}

export const actions = {
  async fetchRents({ commit }) {
    try {
      const response = await this.$axios.$get(
        `${process.env.API_URL}/history/rent?page=1&limit=55`
      )
      console.log({response})
      commit('SET_RENTS', response.data)
    } catch (err) {
      console.error({ err })
    }
  },
  async fetchWish({ commit }) {
    try {
      const response = await this.$axios.$get(
        `${process.env.API_URL}/history/wishlist?page=1&limit=55`
      )
      console.log({response})
      commit('SET_WISH', response.data)
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
