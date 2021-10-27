<template>
  <div class="bc-player relative overflow-hidden">
    <div ref="video" class="bp__inner"></div>
    <transition name="watermark">
      <div v-if="watermarkText" class="absolute z-10 cursor-default opacity-20 text-white font-bold"
        :class="$device.isMobile ? 'text-sm' : $device.isTablet ? '' : 'text-2xl'"
        :style="watermarkStyle">{{watermarkText}}</div>
    </transition>
  </div>
</template>

<script>
import bc from '@brightcove/player-loader'
import faker from 'faker'

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          videos: {}
        }
      }
    }
  },
  data() {
    return {
      watermarkText: null,
      interval: null,
      watermarkStyle: 'top:0; left:0',
      options: {
        accountId: 6151045959001
      }
    }
  },
  watch: {
    watermarkText() {
      if (process.browser) {
        const top = Math.floor(Math.random() * document.body.clientHeight);
        const left = Math.floor(Math.random() * document.body.clientWidth);
        this.watermarkStyle = `top:${top}px;left:${left}px`
      }
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    async init() {
      this.options = {
        ...this.options,
        videoId: this.data.videos.bumper // set video bumper for the first time
      }

      // init brightcove player with modified options
      const { ref } = await bc({
        refNode: this.$refs.video,
        ...this.options,
      })
      // video.js object - https://docs.videojs.com/player
      this.player = ref
      this.player && this.eventAttach()
      //
      this.isAutoPlay && this.autoPlay()

      this.initWatermark()
    },
    initWatermark() {
      const duration = 5000
      
      this.interval = setInterval(() => {
        const randomString = faker.lorem.word() // random text
        if (this.watermarkText) {
          this.watermarkText = null
        } else {
          this.watermarkText = randomString
        }
      }, duration);
    },
    /**
     * destroy
     */
    disposePlayer() {
      this.eventDetach()
      cancelAnimationFrame(this.animId)
      // Nothing to dispose.
      if (!this.player) {
        return
      }
      // Dispose an in-page player.
      if (this.player.dispose) {
        this.player.pause && this.player.pause()
        this.player.dispose()
        // Dispose an iframe player.
      } else if (this.player.parentNode) {
        this.player.parentNode.removeChild(this.player)
      }
      this.player = null
    },
    /**
     * attach event handlers
     */
    eventAttach() {
      if (this.player) {
        this.player.on('play', this.onPlay)
        this.player.on('timeupdate', this.onTimeupdate)
        this.player.on('pause', this.onPause)
        this.player.on('ended', this.onEnded)
      }
    },
    /**
     * detach event handlers
     */
    eventDetach() {
      if (this.player) {
        this.player.off('play', this.onPlay)
        this.player.off('timeupdate', this.onTimeupdate)
        this.player.off('pause', this.onPause)
        this.player.off('ended', this.onEnded)
      }
    },
    /**
     * handlers
     */
    onPlay(e) {
      this.$emit('onPlay', e.target)
      console.log('▶️ on play')
    },
    onTimeupdate(e) {
      this.$emit('onTimeupdate', e.target)
      // this.player &&
      //   console.log(
      //     '⬆️ on timeupdate',
      //     `${this.player.currentTime()} / ${this.player.duration()}`,
      //   )
    },
    onPause(e) {
      this.$emit('onPause', e.target)
      console.log('⏸ on pause')
    },
    onEnded(e) {
      this.$emit('onEnded', e.target)
      console.log('⏹ on ended')
    },
    /**
     * audit scroll position
     */
    autoPlay() {
      // element rect
      const rect = this.$el.getBoundingClientRect()
      // scroll position
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      const top = rect.top + scrollTop - document.documentElement.clientTop
      // viewport height
      const windowHeight = window.innerHeight
      // dist - from window bottom to content top
      const contentTop = scrollTop + windowHeight - top
      // ratio - Until the element is visible and then invisible 0 ~ 1
      const ratio =
        Math.trunc((contentTop / (rect.height + windowHeight)) * 100) / 100
      if (ratio > 0.03 && ratio < 1) {
        !this.viewportIn && this.play()
        this.viewportIn = true
      } else {
        this.pause()
        this.viewportIn = false
      }
      this.animId = requestAnimationFrame(this.autoPlay)
    },
    play() {
      this.player && this.player.paused() && this.player.play()
    },
    pause() {
      this.player && !this.player.paused() && this.player.pause()
    },
  }
}
</script>

<style lang="scss">
.bc-player {
  .bp__inner {
    .video-js {
      @apply w-screen h-screen;
    }
  }
}
</style>