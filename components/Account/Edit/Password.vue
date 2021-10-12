<template>
  <div class="flex flex-col desktop:rounded-2xl desktop:w-96 bg-blue-1 p-8 mobile:p-4">
    <div class="text-xl font-bold text-white mb-8">Ubah Password</div>

    <form @submit.prevent="actionEdit">
      <BaseInput ref="pw1" v-model="form.password" required label="Masukkan Password Baru" name="password" type="password" class="desktop:mb-12 mobile:mb-12 w-full" helper-text="*Password harus terdiri dari huruf kecil dan besar serta angka" />
      <BaseInput v-model="confirmPassword" required label="Konfirmasi Password Baru" name="password" type="password" class="desktop:mb-12 mobile:mb-12 w-full" />
      
      <BaseButton :disabled="loading" class="desktop:w-full mobile:w-full mb-4">Simpan Perubahan</BaseButton>
    </form>
    <BaseButton dark class="desktop:w-full mobile:w-full border border-blue-4" @click="$emit('cancel')">Batalkan Perubahan</BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {},
      confirmPassword: ''
    }
  },
  methods: {
    actionEdit() {
      if (this.form.password !== this.confirmPassword) {
        alert('Password harus sama')
        this.$refs.pw1.$el.querySelector('input').focus()
      } else {
        console.log('edit password')
      }
    }
  }
}
</script>