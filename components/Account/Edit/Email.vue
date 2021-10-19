<template>
  <div class="flex flex-col desktop:rounded-2xl desktop:w-96 bg-blue-1 p-8 mobile:p-4">
    <div class="text-xl font-bold text-white mb-8">Verifikasi Email</div>

    <form @submit.prevent="actionVerify">
      <BaseInput v-model="form.email" disabled required label="Email" name="email" type="text" class="desktop:mb-12 mobile:mb-12 w-full" />
      
      <BaseButton v-if="!verified" :disabled="loading" class="desktop:w-full mobile:w-full mb-4">Verifikasi Email</BaseButton>
    </form>
    <BaseButton dark class="desktop:w-full mobile:w-full border border-blue-4" @click="$emit('cancel')">
      {{ verified ? 'Email sudah terverifikasi' : 'Batalkan Verifikasi' }}
    </BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {},
      verified: false
    }
  },
  methods: {
    actionVerify() {
      this.verified = true
      console.log('edit email')
    }
  }
}
</script>