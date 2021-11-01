/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import faker from 'faker/locale/id_ID'

export class Profile {
  constructor ({
    first_name = '',
    last_name = '',
    email = {},
    gender = '',
    phone = {},
    location = '',
    birthdate = new Date(),
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.name = first_name
    this.email = email.mail
    this.gender = gender
    this.phone = phone.number
    this.location = location
    this.dob = birthdate
    this.verifiedData = {
      email: email.verified,
      phone: phone.verified
    }
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  createItem (data) {
    return Object.freeze(new Profile(data))
  }

  createDummy(id = 1) {
    const data = {
      id: faker.datatype.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      gender: faker.helpers.randomize(['Laki - laki', 'Perempuan']),
      phone: faker.phone.phoneNumber(),
      location: `${faker.address.city()} ${faker.address.secondaryAddress()} ${faker.address.country()}`,
      dob: faker.datatype.datetime()
    }
    return Object.freeze(new Profile(data))
  }
}

export default Profile