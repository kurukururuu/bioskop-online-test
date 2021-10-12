<template>
  <div class="flex-1 flex flex-col justify-center items-center">
    <h1 v-if="error.statusCode === 404">Halaman tidak ditemukan</h1>
    <h1 v-else>Terdapat error di sisi kami</h1>
    <div>Kembali ke <NuxtLink to="/" class="underline">Halaman Utama</NuxtLink></div>
  </div>
</template>

<script>
  export default {
    layout: 'default',
    props: {
      error: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>