<template>
  <div class="grid grid-cols-3 gap-4">
    <img :src="$device.isMobile ? data.cover.portrait : data.cover.landscape" alt="film" class="rounded-lg">
    <div class="col-span-2">
      <div class="font-bold">{{ data.title }}</div>
      <div class="flex text-white items-center mb-4">
        <div class="opacity-50 text-xxs mr-2">{{data.genre.join(', ')}}</div>
        <div class="opacity-50 text-xxs mr-2 border rounded-sm px-1">{{ data.rating }}</div>
        <div class="opacity-50 text-xxs">{{ data.duration }}</div>
      </div>
      <div class="text-xs">
        {{ data.description }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          cover: {}
        }
      }
    }
  }
}
</script>