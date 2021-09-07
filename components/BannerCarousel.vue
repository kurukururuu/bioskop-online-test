<template>
  <VueSlickCarousel autoplay :arrows="false" focus-on-select center-mode center-padding="10%" dots class="banner-carousel">
    <div v-for="(item, i) in 12" :key="i">
      <img src="https://via.placeholder.com/1175x450" alt="film"
      class="rounded-lg mobile:px-1 mx-auto w-full"
      @click="clickActiveOnly">
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  methods: {
    clickActiveOnly(e) {
      // console.log('test', e.target.parentElement.parentElement.classList)
      if (e.target.parentElement.parentElement.parentElement.classList.contains('slick-active')) {
        console.log('clicked active slide')
      }
    }
  }
}
</script>

<style lang="scss">
.banner-carousel {
  .slick-slide:not(.slick-active) {
    @apply transform scale-90 opacity-50;
  }

  img {
    -moz-user-select: none; /* These user-select properties are inheritable, used to prevent text selection */
    -webkit-user-select: none;
    -ms-user-select: none; /* From IE10 only */
    user-select: none; /* Not valid CSS yet, as of July 2012 */
    -webkit-user-drag: none; /* Prevents dragging of images/divs etc */
  }
}
</style>