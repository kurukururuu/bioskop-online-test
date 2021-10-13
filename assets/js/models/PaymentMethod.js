/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import faker from 'faker'

export class PaymentMethod {
  constructor ({
    id = null,
    title = '',
    url = '',
    big = false,
    img = '',
    methods = [],
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.title = title
    this.url = url
    this.big = big
    this.img = img
    this.methods = methods
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  createItem (data) {
    return Object.freeze(new PaymentMethod(data))
  }

  createDummyList(id = 1) {
    const array = []
    const list = [{
      title: 'qris',
      big: true,
      img: '/dummy/payment-e-wallet.png',
      methods: [{code: 'qris', title: 'QRIS', icon: '/dummy/payment-method/qris.png'}]
    }, {
      title: 'cc',
      big: true,
      img: '/dummy/payment-cc.png',
      methods: [{code: 'cc', title: 'Kartu Pembayaran', icon: '/dummy/payment-method/cc.png'}]
    }, {
      title: 'bca',
      methods: [{code: 'bca', title: 'BCA VA', icon: '/dummy/payment-method/bca.png'}]
    }, {
      title: 'pulsa',
      methods: [
        {code: 'telkomsel', title: 'TELKOMSEL', icon: '/dummy/payment-method/telkomsel.png'},
        {code: 'tri', title: 'TRI', icon: '/dummy/payment-method/tri.png'},
        {code: 'smartfren', title: 'SMARTFREN', icon: '/dummy/payment-method/smartfren.png'},
        {code: 'xl', title: 'XL', icon: '/dummy/payment-method/xl.png'},
        {code: 'indosat', title: 'INDOSAT', icon: '/dummy/payment-method/indosat.png'}
      ]
    }]
  
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const data = {
        id,
        title: item.title,
        big: item.big || false,
        img: item.img,
        methods: item.methods,
        url: faker.internet.url(),
        created_at: new Date(),
        updated_at: new Date()
      }
      array.push(Object.freeze(new PaymentMethod(data)))
    }

    return array
  }
}

export default PaymentMethod