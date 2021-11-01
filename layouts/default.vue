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
      classes="modal-classes m-auto"
      width="400px"
      height="auto">
      <AccountLayoutSignUp @cancel="$modal.hide('signup-modal')" @finish-register="$modal.show('verify-email')" @complete-profile="$modal.show('complete-profile')" />
    </Modal>
    
    <Modal name="complete-profile"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutCompleteProfile @cancel="$modal.hide('complete-profile')" @finish-register="actionFinishRegister" />
    </Modal>

    <Modal name="signin-modal"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutSignIn @cancel="$modal.hide('signin-modal')" @action="handleAction" />
    </Modal>

    <Modal name="verify-otp"
      :click-to-close="false"
      classes="modal-classes m-auto"
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

    <Modal name="input-password"
      :click-to-close="false"
      classes="modal-classes m-auto"
      height="auto">
      <AccountLayoutInputPassword @cancel="$modal.hide('input-password')" @action="handleAction" @finish-login="actionFinishLogin" />
    </Modal>

    <Modal name="forgot-password"
      :click-to-close="false"
      classes="modal-classes m-auto"
      width="400px"
      height="auto">
      <AccountLayoutForgotPassword @cancel="$modal.hide('forgot-password')" @action="handleAction" />
    </Modal>
  </LayoutFullPageHeight>
</template>

<script>
export default {
  data() {
    return {
      isStickyHeader: false,
      navbarOffset: 0,
    }
  },
  mounted() {
    window.layoutDefault = this

    this.initEventListener()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('login-payment', () => {
      this.$router.push({ path: this.$route.path, query: { callbackAction: 'open-payment' }})
      this.handleAction('sign-in')
    })
  },
  methods: {
    initEventListener() {
      if (process.browser) {
        window.addEventListener('scroll', this.onScroll)
        setTimeout(() => {
          this.navbarOffset = this.$refs.navbar.$el.offsetTop
        }, 300);

        window.addEventListener('login-payment', () => {
          this.$router.push({ path: this.$route.path, query: { callbackAction: 'open-payment' }})
          this.handleAction('sign-in')
        })

        window.addEventListener('login-myfilm', () => {
          this.$router.push({ path: this.$route.path, query: { callbackAction: 'open-myfilm' }})
          this.handleAction('sign-in')
        })
      }
    },
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
      console.log('action', action)
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
          break
        case 'verify-email':
          this.$modal.hide('verify-otp')
          this.$modal.show('verify-email')
          break
        case 'input-password':
          this.$modal.hide('verify-otp')
          this.$modal.hide('verify-email')
          this.$modal.hide('signin-modal')
          this.$modal.show('input-password')
          break
        case 'forgot-password':
          this.$modal.show('forgot-password')
      }
    },
    actionFinishRegister() {
      this.$modal.hide('signup-modal')
      this.$modal.show('verify-email')
    },
    actionFinishLogin(action) {
      console.log('finish login, callback action:', action)
      let event = null
      switch (action) {
        case 'verify-email':
          this.$modal.show('verify-email')
          break
        case 'open-payment':
          event = new CustomEvent('action', {detail: 'buy-ticket'})
          window.dispatchEvent(event)
          break
        case 'open-myfilm':
          this.$router.push('/my-film')
          break
      }
    }
  }
}
</script>