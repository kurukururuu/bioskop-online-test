<template>
  <div>
    <!-- <VueSlickCarousel :slides-per-row="7" :slides-to-scroll="2" class="default-carousel mb-6">
      <div v-for="(item, i) in 12" :key="i">
        <img src="https://via.placeholder.com/200x260" alt="film"
        class="rounded-lg mobile:px-1 mx-auto">
      </div>
    </VueSlickCarousel> -->

    <Carousel ref="carousel" loop :per-page-custom="[[320, 3.5], [769, 7]]" navigation-enabled :pagination-enabled="false" class="default-carousel">
      <Slide v-for="(item, i) in data" :key="i">
        <img :src="item.cover" alt="film"
        class="rounded-lg mobile:px-1 mx-auto film-cover object-cover cursor-pointer"
        @click="$emit('item-clicked', item)">
      </Slide>
    </Carousel>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    // VueSlickCarousel,
    Carousel,
    Slide
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  // disable dragging function
  mounted(){
  const { carousel } = this.$refs;

  if("ontouchstart" in window){
    carousel.$el.removeEventListener("touchstart", carousel.handleMousedown);
  } else {
    carousel.$el.removeEventListener("mousedown", carousel.handleMousedown);
  }
},
}
</script>

<style lang="scss" scoped>
.film-cover {
  width: 200px;
  height: 260px;
}
</style>

<style lang="scss">
.default-carousel {
  img {
    -moz-user-select: none; /* These user-select properties are inheritable, used to prevent text selection */
    -webkit-user-select: none;
    -ms-user-select: none; /* From IE10 only */
    user-select: none; /* Not valid CSS yet, as of July 2012 */
    -webkit-user-drag: none; /* Prevents dragging of images/divs etc */
  }

  .VueCarousel-navigation-button {
    background-color: gray !important;
    border-radius: 9999px !important;
    @apply w-10 h-10;

    &.VueCarousel-navigation-prev {
      @apply ml-2;
    }
    &.VueCarousel-navigation-next {
      @apply mr-2;
    }
  }
}
</style>