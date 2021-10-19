<template>
  <div class="flex items-center justify-center w-screen flex-1">
    Logging in...
  </div>
</template>

<script>
export default {
  mounted() {
    const query = this.$route.query
    console.log(query)
  }
}
</script>