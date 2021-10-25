<template>
  <div class="flex desktop:items-center justify-center flex-1 container mx-auto py-8">
    <AccountLayoutInfo :data="userData" @open-menu="openMenu" />

    <Modal name="edit-modal"
      :click-to-close="false"
      classes="modal-classes"
      height="auto"
      :width="384">
      <AccountEditPhone v-if="modalContent === 'editPhone'" @cancel="closeMenu" />
      <AccountEditEmail v-if="modalContent === 'editEmail'" @cancel="closeMenu" />
      <AccountEditPassword v-if="modalContent === 'editPassword'" @cancel="closeMenu" />
      <AccountEditName v-if="modalContent === 'editName'" @cancel="closeMenu" />
      <AccountEditGender v-if="modalContent === 'editGender'" @cancel="closeMenu" />
      <AccountEditBirthDate v-if="modalContent === 'editBirthDate'" @cancel="closeMenu" />
      <AccountEditLocation v-if="modalContent === 'editLocation'" @save-location="v => form.location = v" @cancel="closeMenu" />
    </Modal>
  </div>
</template>

<script>
import Profile from '~/assets/js/models/Profile'

export default {
  data() {
    return {
      modalContent: null,
      form: {}
    }
  },
  computed: {
    userData() {
      // dummy computed, change this to this.$auth.user later
      const profile = new Profile()
      return profile.createDummy()
    }
  },
  methods: {
    openMenu(target) {
      // console.log('target', target)
      this.modalContent = target
      this.$modal.show('edit-modal')
    },
    closeMenu() {
      this.modalContent = null
      this.$modal.hide('edit-modal')
    }
  },
}
</script>