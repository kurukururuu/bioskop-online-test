<template>
  <div>
    <SwiperComponent
      item-potrait
      :swiper-option="swiperOption"
      :data="result"
      class="search-swiper"
      @item-clicked="v => $router.push(`/film/${v.id}`)" />
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerColumn: 2,
      }
    }
  }
}
</script>

<style lang="scss">
.search-swiper {
  &.swiper {
    height: 550px;
    margin-left: auto;
    margin-right: auto;

    .swiper-slide {
      height: 260px;
    }
  }
}

@media (max-width: 767px) {
  .search-swiper {
    &.swiper {
      height: 330px;
      margin-left: auto;
      margin-right: auto;

      .swiper-slide {
        height: 150px;
      }
    }
  }
}
</style>