<template>
  <div class="flex flex-col rounded-2xl desktop:w-fit-content bg-blue-1 p-8">
    <div class="flex items-center justify-between mb-10">
      <div class="text-xl font-bold">Lengkapi Biodata</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer ml-auto" @click="$emit('cancel')" />
    </div>
    
    <FormErrorMessage :data="error" />

    <form @submit.prevent="actionCompleteProfile">
      <div class="text-xs mb-1">Jenis Kelamin</div>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <label class="col-span-1 p-3 flex justify-between items-center border border-white border-opacity-20 rounded-lg cursor-pointer">
          <span>Laki - laki</span>
          <BaseInput v-model="form.gender" :checked="form.gender === 'M'" data-value="M" radio required label="" name="gender" class="ml-2 w-5 flex items-center" />
        </label>
        <label class="col-span-1 p-3 flex justify-between items-center border border-white border-opacity-20 rounded-lg cursor-pointer">
          <span>Perempuan</span>
          <BaseInput v-model="form.gender" :checked="form.gender === 'F'" data-value="F" radio required label="" name="gender" class="ml-2 w-5 flex items-center" />
        </label>
      </div>
      <BaseInput v-model="form.dob" required label="Tanggal Lahir" name="dob" type="date" class="mb-6" />
      <BaseInput v-model="form.location" required label="Lokasi" name="location" class="mb-24" @focus="openLocationPopup">
        <MarkerIcon slot="post-icon" :width="18" :height="18" fill="transparent" />
      </BaseInput>

      <BaseButton class="w-full mobile:w-full" size="long">Konfirmasi</BaseButton>
    </form>

    <Modal name="edit-modal"
      classes="modal-classes"
      height="auto"
      :width="384">
      <AccountCompleteLocation v-if="modalContent === 'editLocation'" @save-location="v => form.location = v" @cancel="closeMenu" />
    </Modal>
  </div>
</template>

<script>
import XIcon from '~/assets/icons/XIcon.svg?inline'
import MarkerIcon from '~/assets/icons/PinMarker.svg?inline'

export default {
  components: {
    XIcon,
    MarkerIcon
  },
  data () {
    return {
      form: {},
      modalContent: null,
      error: null
    }
  },
  mounted() {
    this.form = Object.assign({}, this.$store.state.user.formRegister)
  },
  methods: {
    openLocationPopup() {
      console.log('opening popup location')
      this.openMenu('editLocation')
    },
    openMenu(target) {
      // console.log('target', target)
      this.modalContent = target
      this.$modal.show('edit-modal')
    },
    closeMenu() {
      this.modalContent = null
      this.$modal.hide('edit-modal')
    },
    async actionCompleteProfile() {
      console.log('action complete profile', this.form)
      this.$store.commit('user/SET_FORM_REGISTER', this.form)
      try {
        await console.log({...this.form, ...this.$store.state.user.formRegister})
        await this.$store.dispatch('user/actionRegister', {...this.form, ...this.$store.state.user.formRegister})
        this.$store.commit('user/SET_VERIFY_DATA', {...this.form, ...this.$store.state.user.formRegister})
        this.$emit('cancel')
        this.$emit('finish-register')
      } catch (error) {
        console.log({error})
        this.error = {
          title: error.message
        }
      }
    }
  }
}
</script>