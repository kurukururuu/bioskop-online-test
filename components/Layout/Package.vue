<template>
  <div class="text-white layout-package-wrapper">
    <div class="flex justify-between items-center">
      <div class="text-xl font-bold mobile:text-sm">Detail Paket</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
    </div>

    <img src="/dummy/film-package-1.jpg" alt="cover" class="rounded-2xl my-8">

    <div class="text-2xl font-bold">PAKET PROMO 10.000 2 FILM</div>
    <div class="text-yellow-primary font-bold mb-6">Rp10.000</div>

    <div class="flex mb-7">
      <BaseButton v-bind="$props" class="desktop:mr-4 mobile:col-span-3 mobile:w-full">
        Beli Paket
      </BaseButton>
      <BaseButton dark v-bind="$props"
        class="desktop:mr-4 border border-white mobile:col-span-1 mobile:w-full mobile:text-xs">
        <UploadIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
        <span class="text-white">Bagikan</span>
      </BaseButton>
      <BaseButton dark v-bind="$props"
        class="desktop:mr-4 border border-white mobile:hidden mobile:text-xs">
        <GiftIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
        <span class="text-white">Hadiah</span>
      </BaseButton>
    </div>

    <div class="mb-5">Bayar Rp10,000 bisa akses film You & I dan Quarantine Tales sekaligus</div>

    <div class="text-lg font-bold mb-7">Daftar Film</div>

    <div v-for="(item,i) in packageData.films" :key="i">
      <FilmItem :data="item" />
      <div class="border border-opacity-20 w-full my-6"></div>
    </div>
  </div>
</template>

<script>
import GiftIcon from '~/assets/icons/Gift.svg?inline'
import UploadIcon from '~/assets/icons/Upload.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import Package from '~/assets/js/models/Package'

export default {
  components: {
    GiftIcon,
    UploadIcon,
    XIcon
  },
  computed: {
    packageData() {
      // dummies
      const pack = new Package()
      console.log(pack.createDummy())
      return pack.createDummy()
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-package-wrapper {
  width: 800px;
  @apply p-8 border border-opacity-20 rounded-2xl;
}
</style>