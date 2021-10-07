<template>
  <div class="bc-player">
    <div ref="video" class="bp__inner"></div>
  </div>
</template>

<script>
import bc from '@brightcove/player-loader'

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
      options: {
        accountId: 6151045959001
      }
    }
  },
  mounted() {
    this.init()
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