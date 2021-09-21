<template>
  <div class="flex flex-col desktop:rounded-2xl desktop:w-96 bg-blue-1 p-8 mobile:p-4">
    <div class="text-xl font-bold text-white mb-8">Ubah Nomor Ponsel</div>

    <form @submit.prevent="actionEdit">
      <BaseInput v-model="form.phone" required label="Nomor Ponsel" name="phone" type="number" class="desktop:mb-12 mobile:mb-12 w-full" />
      
      <BaseButton :disabled="loading" class="desktop:w-full mobile:w-full mb-4">Simpan Perubahan</BaseButton>
      <BaseButton dark class="desktop:w-full mobile:w-full border border-blue-4">Batalkan Perubahan</BaseButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {}
    }
  },
  methods: {
    actionEdit() {
      console.log('edit phone number')
    }
  }
}
</script>