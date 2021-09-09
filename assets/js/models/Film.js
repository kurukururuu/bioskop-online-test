import faker from 'faker'
/* eslint-disable camelcase */
export class Film {
  constructor ({
    id = null,
    title = '',
    genre = [],
    rating = '',
    duration = '',
    description = '',
    price = 0,
    cover = 'https://via.placeholder.com/200x260',
    director = '',
    writer = '',
    studio = '',
    release_date = new Date(),
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.title = title
    this.genre = genre
    this.rating = rating
    this.duration = duration
    this.description = description
    this.price = price
    this.cover = cover
    this.director = director
    this.writer = writer
    this.studio = studio
    this.releaseDate = release_date
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  createItem (data) {
    return Object.freeze(new Film(data))
  }

  createDummy(id = 1) {
    const data = {
      id,
      title: faker.name.title(),
      genre: [faker.music.genre(), faker.music.genre()],
      rating: '17+',
      duration: '1 H 40 Menit',
      description: faker.lorem.sentence(),
      price: faker.finance.amount(),
      cover: faker.random.image(),
      director: [faker.name.findName(),faker.name.findName()],
      writer: [faker.name.findName(),faker.name.findName()],
      studio: faker.company.companyName(),
      release_date: new Date(),
      created_at: new Date(),
      updated_at: new Date()
    }
    return Object.freeze(new Film(data))
  }

  createDummies(v = 10) {
    const arr = []
    for (let i = 0; i < v; i++) {
      const data = {
        id: i+1,
        title: faker.name.title(),
        genre: [faker.music.genre(), faker.music.genre()],
        rating: '17+',
        duration: '1 H 40 Menit',
        description: faker.lorem.sentence(),
        created_at: new Date(),
        updated_at: new Date()
      }
      arr.push(Object.freeze(new Film(data)))
    }
    return arr
  }
}

export default Film

// export function createItem (data) {
//   return Object.freeze(new Item(data))
// }

// export function createDummy(id = 1) {
//   const data = {
//     id,
//     title: faker.name.title(),
//     genre: [faker.music.genre(), faker.music.genre()],
//     rating: '17+',
//     duration: '1 H 40 Menit',
//     description: faker.lorem.sentence(),
//     created_at: new Date(),
//     updated_at: new Date()
//   }
//   return Object.freeze(new Item(data))
// }

// export function createDummies(v = 10) {
//   const arr = []
//   for (let i = 0; i < v; i++) {
//     const data = {
//       id: i+1,
//       title: faker.name.title(),
//       genre: [faker.music.genre(), faker.music.genre()],
//       rating: '17+',
//       duration: '1 H 40 Menit',
//       description: faker.lorem.sentence(),
//       created_at: new Date(),
//       updated_at: new Date()
//     }
//     arr.push(Object.freeze(new Item(data)))
//   }
//   return arr
// }
