<template>
  <LayoutFullPageHeight>
    <div class="w-full px-8 py-4 bg-blue-2 flex items-center justify-between desktop:hidden">
      <div class="text-xs">Untuk nonton lebih nyaman<br> gunakan aplikasi</div>
      <BaseButton size="small">Buka App</BaseButton>
    </div>
    <BaseNavbar ref="navbar" class="z-40" :sticky-header="isStickyHeader" />

    <!-- <div id="myHeader" ref="navbar" class="bg-white p-10 w-full"
    :class="isStickyHeader ? 'fixed top-0' : ''">
      <h2>My Header</h2>
    </div> -->

    <div class="flex-1"
      :style="isStickyHeader ? 'padding-top: 83px' : ''">
      <Nuxt />
    </div>

    <MobileMenuBar class="desktop:hidden z-40" />
    <BaseFooter class="mobile:hidden" />
  </LayoutFullPageHeight>
</template>

<script>
export default {
  data() {
    return {
      isStickyHeader: false,
      navbarOffset: 0
    }
  },
  mounted() {
    window.layoutDefault = this
    
    if (process.browser) {
      window.addEventListener('scroll', this.onScroll)

      setTimeout(() => {
        this.navbarOffset = this.$refs.navbar.$el.offsetTop
      }, 300);
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      const navbar = this.$refs.navbar
      const threshold = this.isStickyHeader ? this.navbarOffset : navbar.$el.offsetTop
      // console.log(window.pageYOffset, {navbar:threshold})
      if (window.pageYOffset > threshold) {
        this.isStickyHeader = true
      } else {
        this.isStickyHeader = false
      }
    }
  }
}
</script>