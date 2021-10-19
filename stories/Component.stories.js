/* eslint-disable no-console */
import Film from '~/assets/js/models/Film'

export default {
  title: 'Component',
  argTypes: {
  }
}

export const BaseNavbar = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="text-yellow-primary desktop:hidden">--Desktop only--</div>
    <BaseNavbar class="mobile:hidden" />
  </div>
`
})

export const FilmInfo = (args, { argTypes }) => ({
  computed: {
    film() {
      const film = new Film()
      return film.createDummy()
    }
  },
  template: `
  <div>
    <FilmInfo :data="film" />
  </div>
`
})

export const DefaultCarousel = (args, { argTypes }) => ({
  computed: {
    films() {
      const films = []
      const film = new Film()
      for (let i = 0; i < 15; i++) {
        films.push(film.createDummy())
      }
      return films
    }
  },
  template: `
    <div class="p-4">
      <VueCarousel :data="films" @item-clicked="handleClick" />
    </div>
  `,
  methods: {
    handleClick(payload) {
      console.log('clicked', payload)
    }
  }
})

export const BannerCarousel = (args, { argTypes }) => ({
  computed: {
    films() {
      const films = []
      const film = new Film()
      for (let i = 0; i < 7; i++) {
        films.push(film.createDummy())
      }
      return films
    }
  },
  template: `
    <div class="p-4">
      <BannerCarousel :data="films" @active-click="handleActiveClick" />
    </div>
  `,
  methods: {
    handleActiveClick(payload) {
      console.log('clicked active slide', payload)
    }
  }
})

export const MenuBar = (args, { argTypes }) => ({
  template: `
    <div style="height: 200vh;" class="border">
      <div class="text-yellow-primary mobile:hidden">--Mobile only--</div>
      <MobileMenuBar class="desktop:hidden" />
    </div>
  `
})

export const AccountLayoutMenu = (args, { argTypes }) => ({
  template: `
  <div class="flex desktop:items-center justify-center h-screen">
    <AccountLayoutMenu />
  </div>
`
})

export const AccountLayoutInfo = (args, { argTypes }) => ({
  template: `
  <div class="flex desktop:items-center justify-center h-screen">
    <AccountLayoutInfo />
  </div>
`
})

export const AccountLayoutHistory = (args, { argTypes }) => ({
  template: `
  <div class="flex desktop:items-center justify-center h-screen">
    <AccountLayoutHistory />
  </div>
`
})

export const LayoutPackage = (args, { argTypes }) => ({
  template: `
  <div>
    <LayoutPackage />
  </div>
`
})

export const CreditCard = (args, { argTypes }) => ({
  data() {
    return {
      formData: {
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
      }
    }
  },
  template: `
  <div>
    <CreditCard />
  </div>
  `,
  methods: {
    updateCardNumber (val) {
    },
    updateCardName (val) {
    },
    updateCardMonth (val) {
    },
    updateCardYear (val) {
    },
    updateCardCvv (val) {
    }
  },
})

export const BrightcovePlayer = (args, { argTypes }) => ({
  data() {
    return {
      data: {
        videos: {
          bumper: 6213528295001,
          realVid: 6213528295001
        }
      }
    }
  },
  template: `
  <div>
    <BrightcovePlayer :data="data" />
  </div>
`
})

export const BaseFooter = (args, { argTypes }) => ({
  template: `
  <div>
    <div class="text-yellow-primary desktop:hidden">--Desktop only--</div>
    <BaseFooter class="mobile:hidden" />
  </div>
`
})