<template>
  <div class="flex desktop:items-center justify-center flex-1 container mx-auto py-8">
    <AccountLayoutInfo @open-menu="openMenu" />

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
      <AccountEditLocation v-if="modalContent === 'editLocation'" @cancel="closeMenu" />
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalContent: null
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
  }
}
</script>