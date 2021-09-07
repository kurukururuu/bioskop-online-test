<template>
  <div class="flex flex-col rounded-2xl desktop:w-96 bg-blue-1 p-8 mobile:p-4">
    <div class="text-xl font-bold text-white mb-8">Masukkan Jenis Kelamin</div>

    <form @submit.prevent="actionEdit">
      <BaseSelect v-model="form.gender" :options="['Laki-laki', 'Perempuan']" required label="Jenis Kelamin" class="mb-12 w-full" type="select" />
      
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

    }
  }
}
</script>