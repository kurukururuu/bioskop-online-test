<template>
  <div class="flex flex-col desktop:rounded-2xl desktop:w-96 bg-blue-1 p-8 mobile:p-4">
    <div class="text-xl font-bold text-white mb-8">Masukkan Lokasi</div>

    <form @submit.prevent="actionEdit">
      <BaseSelect v-model="form.country" :options="['Indonesia', 'Lainnya']" required label="NEGARA" class="w-full" type="select" />
      <BaseSelect v-model="form.province" :options="['Aceh', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah']" required label="PROVINSI" class="w-full mb-6" type="select" />
      <BaseSelect v-model="form.city" :options="['Bekasi', 'Bandung', 'Ciamis', 'Purwakarta']" required label="KOTA/KABUPATEN" class="w-full mb-6" type="select" />

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