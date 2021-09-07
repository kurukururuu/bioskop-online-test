<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-1">
      <img src="https://via.placeholder.com/80x100" alt="film" class="rounded">
    </div>
    <div class="col-span-4">
      <div class="font-bold">STORY OF KALE</div>
      <div class="flex justify-between text-xs">
        <div>Pembayaran</div>
        <div class="font-bold">Rp. 5.000</div>
      </div>
      <div class="flex justify-between text-xs mb-6">
        <div>Status Pembayaran</div>
        <div class="font-bold"
          :class="status.class">{{ status.text }}</div>
      </div>

      <div class="text-xs opacity-50">12 Sept 11.00</div>
      <div class="flex">
        <BaseButton dark size="small" class="ml-auto rounded-full border border-blue-4">Detail</BaseButton>
        <BaseButton v-if="status.red" size="small" class="rounded-full border ml-2">Coba Lagi</BaseButton>
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
        return {}
      }
    }
  },
  computed: {
    status() {
      switch (this.data.status) {
        case 'success':
          return {
            class: 'text-green-500',
            text: 'Berhasil'
          }
        case 'expired':
          return {
            class: 'text-red-secondary',
            text: 'Kadaluarsa',
            red: true
          }
        case 'failed':
          return {
            class: 'text-red-secondary',
            text: 'Gagal',
            red: true
          }
        case 'canceled':
          return {
            class: 'text-red-secondary',
            text: 'Canceled',
            red: true
          }
        case 'pending':
        default:
          return {
            class: 'text-yellow-primary',
            text: 'Menunggu Pembayaran'
          }
      }
    }
  }
}
</script>