<template>
  <swiper class="swiper" :options="options">
    <!-- <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide> -->
    <!-- <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide> -->
    <SwiperSlide v-for="(item, i) in data" :key="i"
      @click="$emit('item-clicked', item)">
      <img :src="itemPortrait ? item.cover.portrait : item.cover.landscape" alt="film"
        class="rounded-lg mobile:px-1 mx-auto film-cover object-cover cursor-pointer"
        @click="$emit('item-clicked', item)">
    </SwiperSlide>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    swiperOption: {
      type: Object,
      default() {
        return {
          ...this.defaultSwiperOption
        }
      }
    },
    itemPortrait: {
      type: Boolean,
      default() {
        return true
      }
    },
  },
  data() {
    return {
      // defaultSwiperOption: {
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev'
      //   },
      //   breakpoints: {
      //     1024: {
      //       slidesPerView: 7,
      //       spaceBetween: 10
      //     },
      //     768: {
      //       slidesPerView: 4,
      //       spaceBetween: 10
      //     },
      //     640: {
      //       slidesPerView: 3,
      //       spaceBetween: 10
      //     },
      //     320: {
      //       slidesPerView: 3,
      //       spaceBetween: 10
      //     }
      //   }
      // }
    }
  },
  computed: {
    defaultSwiperOption() {
      let loop = false
      if (this.$device.isMobile) {
        loop = this.data.length > 3
      } else if (this.$device.isTablet) {
        loop = this.data.length > 4
      } else {
        loop = this.data.length > 7
      }

      return {
        loop,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 7,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }
      }
    },
    options() {
      return {
        ...this.defaultSwiperOption,
        ...this.swiperOption
      }
    }
  },
  mounted() {
    window.swiper = this
    if (this.$device.isMobile) {
      this.defaultSwiperOption.loop = this.data.length > 3
    } else if (this.$device.isTablet) {
      this.defaultSwiperOption.loop = this.data.length > 4
    } else {
      this.defaultSwiperOption.loop = this.data.length > 7
    }
  }
}
</script>

<style lang="scss" scoped>
.film-cover {
  width: 200px;
  height: 260px;

  @media (max-width: 768px) {
    height: 150px;
  }
}
</style>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  @apply bg-white bg-opacity-40 rounded-full;
  
  width: 40px !important;
  height: 40px !important;
  
  &::after {
    @apply text-white;

    font-size: 16px !important;
  }
}
</style>