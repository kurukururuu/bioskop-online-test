<template>
  <div>
    <BannerCarousel :data="featuredFilms" @active-click="v => $router.push(`/film/${v.id}`)" />
    
    <div class="container mx-auto py-8 mobile:py-16">
      <div v-for="(list,i) in categories" :key="i" class="mb-20 mobile:mb-10">
        <div class="text-lg font-bold mb-7">{{ list.title }}</div>
        <SwiperComponent :data="list.films"
          @item-clicked="v => $router.push(`/film/${v.id}`)" />
      </div>
    </div>
    <MobileMenuBar class="desktop:hidden z-40" />
  </div>
</template>

<script>
import Film from '~/assets/js/models/Film'

export default {
  computed: {
    categories() {
      // dummy
      const data = [
        {
          title: 'Akan Datang',
          films: this.createDummyFilms()
        },
        {
          title: 'Terbaru di Bioskop Online',
          films: this.createDummyFilms()
        },
        {
          title: 'Bioskop Online Original',
          films: this.createDummyFilms()
        },
      ]
      return data
    },
    featuredFilms() {
      // dummy
      const films = []
      const film = new Film()
      for (let i = 0; i < 10; i++) {
        films.push(film.createDummy())
      }
      return films
    }
  },
  methods: {
    onScroll(e) {
      console.log(e)
    },
    handleActiveClick(payload) {
      console.log('clicked active slide', payload)
    },
    createDummyFilms() {
      const films = []
      const film = new Film()
      for (let i = 0; i < 15; i++) {
        films.push(film.createDummy())
      }
      return films
    }
  }
}
</script>
