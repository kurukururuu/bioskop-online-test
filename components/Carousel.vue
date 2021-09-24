<template>
  <div class="relative">
    <div class="text-white">{{scrollPosition}}</div>
    <div class="carousel-container">
      <div ref="drag" class="flex flex-nowrap overflow-auto cursor-grab" @scroll="e => scrollPosition = e.target.scrollLeft">
        <img v-for="(item,i) in 12" :key="i" src="https://via.placeholder.com/200x260" alt="film"
        class="mr-2 rounded-lg">

        <div class="absolute w-full h-full flex items-center justify-between left-0 top-0">
          <div v-if="scrollPosition !== 0" class="-ml-4">
            <div class="bg-white bg-opacity-40 rounded-full p-2 cursor-pointer hover:bg-opacity-70">
              <ChevronRight :width="20" :height="20" class="transform rotate-180" @click="scroll('left')" />
            </div>
          </div>
          <div v-if="scrollPosition !== scrollWidth" class="ml-auto -mr-4 right-0">
            <div class="bg-white bg-opacity-40 rounded-full p-2 cursor-pointer hover:bg-opacity-70">
              <ChevronRight :width="20" :height="20" @click="scroll('right')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from '~/assets/js/containerDragable'
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'

export default {
  components: {
    ChevronRight
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      scrollPosition: 0,
      scrollWidth: 0
    }
  },
  watch: {
    scrollPosition(newValue) {
      console.log(newValue, this.scrollWidth, {ele:this.$el.querySelector('.carousel-container')})
    }
  },
  mounted() {
    window.carousel = this
    this.scrollPosition = this.$refs.drag.scrollLeft
    this.scrollWidth = this.$refs.drag.scrollWidth
    draggable(this.$refs.drag)
  },
  methods: {
    onScrollContainer(e) {
      console.log(e)
    },
    scroll(direction) {
      const div = this.$refs.drag
      let scrollAmount = 0
      switch (direction) {
        case 'left':
          if (div.scrollLeft > 200) {
            scrollAmount = div.scrollLeft - 200
          } else {
            scrollAmount = 0
          }
          break
        case 'right':
          if (div.scrollLeft > (div.scrollWidth - 200)) {
            scrollAmount = div.scrollWidth
          } else {
            scrollAmount = div.scrollLeft + 200
          }
          break
      }
      div.scrollTo({
        behavior: 'smooth',
        left: scrollAmount
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-container {
  // width: fit-content;
  @apply flex overflow-auto;
  &>div::-webkit-scrollbar {
    display: none;
  }
}
</style>