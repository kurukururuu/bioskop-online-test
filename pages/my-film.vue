<template>
  <div class="py-8">
    <div class="container mx-auto max-w-3xl">
      <div class="text-2xl font-bold mb-9">Film Saya</div>

      <div class="flex border-b border-white border-opacity-20 w-full mb-12">
        <div class="pb-2 text-xl font-semibold cursor-pointer px-1 mr-4"
          :class="activeTabs === 'watch' ? 'border-b-2 border-white' : 'text-blue-4 text-opacity-20'"
          @click="activeTabs = 'watch'">Tonton</div>
        <div class="pb-2 text-xl font-semibold cursor-pointer px-1"
          :class="activeTabs === 'list' ? 'border-b-2 border-white' : 'text-blue-4 text-opacity-20'"
          @click="activeTabs = 'list'">Daftarku</div>
      </div>

      <transition name="slide-left">
        <div v-if="activeTabs === 'watch'" key="1">
          <MyFilmItem v-for="(collection, i) in collections" :key="i" :data="collection" class="mb-10" />
        </div>
        <div v-else key="2">
          <div class="grid grid-cols-4 gap-3">
            <nuxt-link v-for="(film, i) in films" :key="i" :to="`/film/${film.id}`" class="cursor-pointer">
              <img :src="film.cover.potrait" alt="film" class="rounded-lg">
            </nuxt-link>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MyFilm from '~/assets/js/models/MyFilm'
import Film from '~/assets/js/models/Film'

export default {
  data() {
    return {
      activeTabs: 'watch'
    }
  },
  computed: {
    collections() {
      const collections = []
      const collection = new MyFilm()
      for (let i = 0; i < 15; i++) {
        collections.push(collection.createDummy())
      }
      return collections
    },
    films() {
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