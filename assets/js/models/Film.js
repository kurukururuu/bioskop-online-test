/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import faker from 'faker'
import { title } from 'faker/lib/locales/id_ID'

// status
// 0: Currently available
// 1: Avilable with voucher(?) in duration period
// 2: Rented in duration
// 3: Coming soon

export class Film {
  constructor ({
    // dummy
    // id = null,
    // title = '',
    // genre = [],
    // rating = '',
    duration = '',
    // description = '',
    // price = 0,
    cover = {},
    director = '',
    writer = '',
    studio = '',
    status = 0,
    statusText = '',
    release_date = new Date(),
    created_at = new Date(),
    updated_at = new Date(),

    // API
    // article = null,
    // currentDateTime = new Date(),
    // hashed_id = null,
    // series = null,
    // title = {},
    // type = {},

    available_end = new Date(),
    available_start = new Date(),
    description = '',
    due_date = null,
    genres = [],
    hashed_id = null,
    images = {},
    label = '',
    layout = '',
    limit = 0,
    name = '',
    paid = false,
    price = {},
    rating = {},
    wishlist = false,
  } = {}) {
    // this.id = id
    // this.title = title
    // this.genre = genre
    // this.rating = rating
    // this.duration = duration
    // this.description = description
    // this.price = price
    // this.cover = cover
    // this.director = director
    // this.writer = writer
    // this.studio = studio
    // this.status = status
    // this.statusText = statusText
    // this.releaseDate = release_date
    // this.timestamp = {
    //   created: created_at,
    //   updated: updated_at
    // }

    this.id = hashed_id
    this.title = name

    const genreList = genres.map(v => v.name) || []
    this.genre = genreList
    this.rating = rating.text || '-'
    this.duration = duration
    this.description = description
    this.price = price

    this.cover = images
    this.cover.portrait = images.portrait
    this.cover.landscape = images.spotlight

    this.director = director
    this.writer = writer
    this.studio = studio
    this.status = status
    this.statusText = statusText
    this.releaseDate = release_date
    this.wishlist = wishlist
    this.timestamp = {
      // updated_at: currentDateTime,
      start_date: available_start,
      end_date: available_end,
    }
  }

  createItem (data) {
    return Object.freeze(new Film(data))
  }

  createDummy(id = 1) {
    const data = {
      id: faker.datatype.uuid(),
      title: faker.name.title(),
      genre: [faker.music.genre(), faker.music.genre()],
      rating: '17+',
      duration: '1 H 40 Menit',
      description: faker.lorem.paragraph(),
      price: faker.finance.amount(),
      cover: {
        landscape: faker.image.abstract(1175,450,true),
        portrait: faker.image.abstract(276,357,true)
      },
      director: [faker.name.findName(),faker.name.findName()],
      writer: [faker.name.findName(),faker.name.findName()],
      studio: faker.company.companyName(),
      status: Math.floor(Math.random() * 4),
      statusText: 'Berlaku Sampai 18 Agustus 2021 18:00',
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
        id: faker.datatype.uuid(),
        title: faker.name.title(),
        genre: [faker.music.genre(), faker.music.genre()],
        rating: '17+',
        duration: '1 H 40 Menit',
        description: faker.lorem.paragraph(),
        price: faker.finance.amount(),
        cover: faker.random.image(),
        director: [faker.name.findName(),faker.name.findName()],
        writer: [faker.name.findName(),faker.name.findName()],
        studio: faker.company.companyName(),
        status: Math.floor(Math.random() * 3),
        statusText: 'Berlaku Sampai 18 Agustus 2021 18:00',
        release_date: new Date(),
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
