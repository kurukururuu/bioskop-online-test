<template>
  <swiper class="swiper" :options="swiperOption">
    <SwiperSlide v-for="(item, i) in data" :key="i"
      @click="$emit('item-clicked', item)">
      <img :src="$device.isMobile ? item.cover.potrait : item.cover.landscape" alt="film"
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
          ...this.swiperOption,
          loop: true,
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
      }
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