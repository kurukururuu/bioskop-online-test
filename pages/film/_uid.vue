<template>
  <div class="min-h-screen film-page">
    <div class="header-cover"
    :style="`background-image:url(${data.cover})`">
      <div class="overlay" />
    </div>

    <div class="container mx-auto">
      <FilmInfo :data="data" class="relative -top-52 mb-7 z-10 mobile:top-0" />

      <div class="text-lg font-bold mb-7 mobile:mb-4">Akan Datang</div>
      <SwiperComponent :data="films"
        class="mb-32" @item-clicked="v => $router.push(`/film/${v.id}`)" />
    </div>
  </div>
</template>

<script>
import Film from '~/assets/js/models/Film'

export default {
  computed: {
    data() {
      const film = new Film()
      return film.createDummy()
    },
    films() {
      const films = []
      const film = new Film()
      for (let i = 0; i < 15; i++) {
        films.push(film.createDummy())
      }
      return films
    }
  },
  mounted() {
    window.slugFilm = this
  }
}
</script>

<style lang="scss" scoped>
.film-page {
  .header-cover {
    @apply relative;
    @apply bg-no-repeat bg-cover;

    height: 50vh;

    @media (max-width: 768px) {
      height: 20vh;
    }
    
    .overlay {
      @apply absolute w-full h-full top-0 left-0 z-10;
      @apply bg-gradient-to-t to-transparent;

      // this is extended theme color: from-black-opa-50
      // but somehow apply doesn't work for extended theme, but plugin does
      --tw-gradient-from: #011228;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(1, 18, 40, 0.1));
    }
  }
}
</style>