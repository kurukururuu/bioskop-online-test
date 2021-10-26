<template>
  <LayoutFullPageHeight>
    <div class="w-full px-8 py-4 bg-blue-2 flex items-center justify-between desktop:hidden">
      <div class="text-xs">Untuk nonton lebih nyaman<br> gunakan aplikasi</div>
      <BaseButton size="small">Buka App</BaseButton>
    </div>
    <BaseNavbar ref="navbar" class="z-40" :sticky-header="isStickyHeader" @action="handleAction" />

    <!-- <div id="myHeader" ref="navbar" class="bg-white p-10 w-full"
    :class="isStickyHeader ? 'fixed top-0' : ''">
      <h2>My Header</h2>
    </div> -->

    <div class="flex-1 flex flex-col"
      :style="isStickyHeader ? 'padding-top: 83px' : ''">
      <Nuxt />
    </div>
    <BaseFooter class="mobile:hidden" />

    <!-- Modals -->
    <Modal name="signup-modal"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutSignUp @cancel="$modal.hide('signup-modal')" @finish-register="$modal.show('verify-otp')" @complete-profile="$modal.show('complete-profile')" />
    </Modal>
    
    <Modal name="complete-profile"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutCompleteProfile @cancel="$modal.hide('complete-profile')" @finish-register="$modal.show('verify-otp')" />
    </Modal>

    <Modal name="signin-modal"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutSignIn @cancel="$modal.hide('signin-modal')" @action="handleAction" @finish-login="$modal.show('verify-email')" />
    </Modal>

    <Modal name="verify-otp"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutVerifyOTP @cancel="$modal.hide('verify-otp')" />
    </Modal>

    <Modal name="verify-email"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutVerifyEmail @cancel="$modal.hide('verify-email')" @action="handleAction" />
    </Modal>
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
    },
    handleAction(action) {
      switch (action) {
        case 'sign-up':
          this.$modal.hide('signin-modal')
          this.$modal.show('signup-modal')
          break
        case 'sign-in':
          this.$modal.hide('signup-modal')
          this.$modal.show('signin-modal')
          break
        case 'otp':
          this.$modal.hide('verify-email')
          this.$modal.show('verify-otp')
      }
    }
  }
}
</script>