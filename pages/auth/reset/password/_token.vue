<template>
  <div>
    <Modal name="change-password"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountLayoutChangePassword @cancel="$modal.hide('change-password')" />
    </Modal>
  </div>
</template>

<script>
export default {
  mounted() {
    this.openModal()
  },
  methods: {
    openModal() {
      this.$modal.show('change-password')
    },
  }
}
</script>