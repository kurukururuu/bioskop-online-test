<template>
  <VueSlickCarousel ref="carousel" :arrows="false" focus-on-select center-mode center-padding="10%" dots
    class="banner-carousel">
    <div v-for="(item, i) in data" :key="i">
      <div v-touch:tap="e => clickActiveOnly(e, item)" class="relative">
        <img :src="$device.isMobile ? item.cover.potrait : item.cover.landscape" alt="film"
          class="rounded-lg mobile:px-1 mx-auto w-full film-cover object-cover cursor-pointer">

        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8 mobile:hidden">
          <div class="overlay" />
          <div class="details text-white z-10">
            <img src="/dummy/film-1-text.svg" alt="title" class="mb-4">
            <div class="text-sm mb-7"><span class="text-yellow-primary font-bold">{{ formatter.format(item.price) }}</span> ( Belum termasuk pajak )</div>
            <div class="text-sm mb-6 w-2/5 mobile:w-full">{{ item.description }}</div>
            <BaseButton class="lg:text-lg lg:font-bold"
              @click.native="e => clickActiveOnly(e, item)">Nonton</BaseButton>
          </div>
        </div>

        <div class="absolute bottom-8 left-0 w-full desktop:hidden">
          <img src="/dummy/film-1-text.svg" alt="title" class="mx-auto">
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import formatter from '~/assets/js/helper/currencyFormatter'
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
  data() {
    return {
      formatter
    }
  },
  methods: {
    clickActiveOnly(e, payload) {
      if (e.target.closest('.slick-active')) {
        this.$emit('active-click', payload)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.film-cover {
  object-fit: cover;
}

.overlay {
  @apply transition-all duration-300 ease-in-out;
  @apply bg-gradient-to-r to-transparent absolute top-0 left-0 w-full h-full rounded-xl;

  // this is extended theme color: from-black-opa-50
  // but somehow apply doesn't work for extended theme, but plugin does
  --tw-gradient-from: #0008;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0));
}
</style>


<style lang="scss">
.banner-carousel {
  .slick-slide:not(.slick-active) {
    @apply transform scale-95 opacity-50;

    .details {
      @apply hidden;
    }
  }

  .slick-dots {
    bottom: 25px;

    li {
      button::before {
        @apply text-base;

        color: #9BC7FD;
      }

      &.slick-active {
        button::before {
          color: #9BC7FD;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .slick-dots {
      bottom: -50px;

      li {
        button::before {
          color: #E4E4E4;
          font-size: 0.5rem;
        }

        &.slick-active {
          button::before {
            color: #E4E4E4;
          }
        }
      }
    }
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