<template>
  <VueSlickCarousel autoplay :arrows="false" focus-on-select center-mode center-padding="10%" dots class="banner-carousel">
    <div v-for="(item, i) in data" :key="i">
      <img :src="item.cover" alt="film"
      class="rounded-lg mobile:px-1 mx-auto w-full film-cover object-cover cursor-pointer"
      @click="e => clickActiveOnly(e, item)">
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
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    clickActiveOnly(e, payload) {
      // console.log('test', e.target.parentElement.parentElement.classList)
      if (e.target.parentElement.parentElement.parentElement.classList.contains('slick-active')) {
        this.$emit('active-click', payload)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.film-cover {
  height: 450px;
}
</style>

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