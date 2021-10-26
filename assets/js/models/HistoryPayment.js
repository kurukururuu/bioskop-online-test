/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import faker from 'faker'
import Film from './Film'
import Package from './Package'

// payment status
// 0: Pending
// 1: Success
// 2: Expired
// 3: Failed
// 4: Canceled

export class HistoryPayment {
  constructor ({
    id = null,
    title = '',
    status = null,
    total_price = 0,
    item_type = '',
    payment_details = {},
    duration = '',
    details = {},
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.title = title
    this.status = status
    this.payment_details = payment_details
    this.duration = duration
    this.item_type = item_type
    this.totalPrice = total_price
    this.details = details
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  createItem (data) {
    return Object.freeze(new HistoryPayment(data))
  }

  createDummy(id = 1) {
    const item_type = faker.helpers.randomize(['film', 'package'])
    const payment_method = faker.helpers.randomize(['OVO', 'BCA Virtual Account', 'PULSA', 'KARTU KREDIT'])
    const data = {
      id,
      name: faker.name.title(),
      status: Math.floor(Math.random() * 5),
      total_price: faker.finance.amount(),
      duration: '48 Jam',
      payment_details: {
        payment_id: `BO-${faker.datatype.number()}`,
        payment_method
      },
      item_type,
      details: this.getDetails(item_type),
      created_at: new Date(),
      updated_at: new Date()
    }
    return Object.freeze(new HistoryPayment(data))
  }

  getDetails(type) {
    const film = new Film()
    const pack = new Package()
    switch (type) {
      case 'film':
        return film.createDummy()
      case 'package':
        return pack.createDummy()
    }
  }
}

export default HistoryPayment