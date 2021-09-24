/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import faker from 'faker'
import Film from '~/assets/js/models/Film'

export class Package {
  constructor ({
    id = null,
    name = '',
    cover = '/dummy/film-package-1.jpg',
    summary = '',
    price = 0,
    description = '',
    films = [],
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.name = name
    this.cover = cover
    this.summary = summary
    this.price = price
    this.description = description
    this.films = films
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  createItem (data) {
    const film = new Film()
    return Object.freeze(new Package({
      ...data,
      films: data.map(v => { return film.createItem(v) })
    }))
  }

  createDummy(id = 1) {
    const film = new Film()
    const data = {
      id,
      name: faker.name.title(),
      cover: faker.random.image(),
      summary: faker.lorem.sentence(),
      price: faker.finance.amount(),
      description: faker.lorem.paragraph(),
      films: [film.createDummy(), film.createDummy()],
      created_at: new Date(),
      updated_at: new Date()
    }
    return Object.freeze(new Package(data))
  }
}

export default Package