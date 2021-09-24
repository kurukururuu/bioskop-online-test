<template>
  <div class="bg-blue-2 px-7 py-5 w-1/4 rounded-2xl mobile:w-full">
    <div class="flex justify-between items-center mb-8 mobile:justify-start mobile:mb-5mobile:py-3">
      <div class="text-xl font-bold text-white">Lokasi</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer ml-auto" />
    </div>
    
    <form @submit.prevent="actionSaveLocation">
      <BaseSelect v-model="location.country" :options="['Indonesia', 'Lainnya']" required label="NEGARA" class="w-full" type="select" />
      <BaseSelect v-model="location.province" :options="['Aceh', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah']" required label="PROVINSI" class="w-full mb-6" type="select" />
      <BaseSelect v-model="location.city" :options="['Bekasi', 'Bandung', 'Ciamis', 'Purwakarta']" required label="KOTA/KABUPATEN" class="w-full mb-6" type="select" />

      <BaseButton class="w-full mobile:mb-5 mobile:w-full">Simpan</BaseButton>
    </form>
  </div>
</template>

<script>
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    XIcon
  },
  data() {
    return {
      location: {}
    }
  },
  methods: {
    actionSaveLocation() {
      console.log('save location', this.location)
    }
  }
}
</script>