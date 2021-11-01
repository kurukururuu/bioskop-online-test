/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
// import faker from 'faker'
import Film from './Film'

export class MyFilm {
  constructor ({
    id = null,
    film = {},
    items = {},
    available_start = new Date(),
    currentDateTime = new Date(),
    expired_at = new Date(),
    duration = new Date(),
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
  
    const filmModel = new Film()
    this.available = available_start
    this.current = currentDateTime
    this.expired = expired_at
    this.id = id
    this.film = filmModel.createItem(items)
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