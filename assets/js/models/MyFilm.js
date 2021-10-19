/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// import faker from 'faker'
import Film from './Film'

export class MyFilm {
  constructor ({
    id = null,
    film = {},
    duration = new Date(),
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.film = film
    this.timestamp = {
      created: created_at,
      updated: updated_at,
      duration
    }
  }

  createItem (data) {
    return Object.freeze(new MyFilm(data))
  }

  createDummy(id = 1) {
    const film = new Film()

    const date = new Date()
    const fakeDuration = date.setDate(date.getDate() + 2)

    const data = {
      id,
      film: film.createDummy(),
      created_at: new Date(),
      updated_at: new Date(),
      duration: fakeDuration
    }
    return Object.freeze(new MyFilm(data))
  }
}

export default MyFilm