/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import faker from 'faker'
import Film from '~/assets/js/models/Film'

export class Package {
  constructor ({
    id = null,
    name = '',
    films = [],
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.name = name
    this.films = films
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  createItem (data) {
    return Object.freeze(new Package(data))
  }

  createDummy(id = 1) {
    const film = new Film()
    const data = {
      id,
      name: faker.name.title(),
      films: [film.createDummy(), film.createDummy()],
      created_at: new Date(),
      updated_at: new Date()
    }
    return Object.freeze(new Package(data))
  }
}

export default Package