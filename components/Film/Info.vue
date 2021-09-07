<template>
  <div>
    <div class="flex mb-8">
      <img src="https://via.placeholder.com/200x260" class="mobile:hidden">
      <div class="flex flex-col w-full desktop:justify-end desktop:ml-8">
        <div class="flex justify-between items-center">
          <div>
            <div class="text-2xl text-white font-bold">Judul Film</div>
            <div class="flex text-white items-center mb-4">
              <div class="opacity-50 text-sm mr-2">Drama,Family</div>
              <div class="opacity-50 text-sm mr-2 border rounded-sm px-1">17+</div>
              <div class="opacity-50 text-sm">1 h 40 Menit</div>
            </div>
            <div class="text-yellow-primary text-lg font-bold mb-4">
              Rp10.000
            </div>
          </div>
          <div class="flex flex-col items-center desktop:hidden">
            <GiftIcon slot="pre-icon" fill="transparent" stroke="white" width="32" height="32" />
            <div class="text-xxs text-white">Hadiah</div>
          </div>
        </div>

        <div class="flex mobile:grid mobile:grid-cols-3 mobile:gap-3">
          <BaseButton v-bind="$props" class="w-40 mobile:col-span-3 mobile:w-full">
            Beli Tiket
          </BaseButton>
          <BaseButton dark v-bind="$props"
            class="desktop:w-40 desktop:ml-4 border border-white mobile:col-span-1 mobile:w-full mobile:text-xs">
            <PlusIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Daftarku</span>
          </BaseButton>
          <BaseButton dark v-bind="$props"
            class="desktop:w-40 desktop:ml-4 border border-white mobile:col-span-1 mobile:w-full mobile:text-xs">
            <PathCircleIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Trailers</span>
          </BaseButton>
          <BaseButton dark v-bind="$props"
            class="desktop:w-40 desktop:ml-4 border border-white mobile:col-span-1 mobile:w-full mobile:text-xs">
            <UploadIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Bagikan</span>
          </BaseButton>
          <BaseButton dark v-bind="$props"
            class="desktop:w-40 desktop:ml-4 border border-white mobile:hidden mobile:text-xs">
            <GiftIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Hadiah</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="text-white">
      <div class="text-sm mb-8 mobile:text-xs">
        Cerita tentang sebuah keluarga yang ingin mempunyai hidup yang bermakna walau harus bertahan hidup dalam kemiskinan setelah Abah menjual semua harta keluarga mereka demi membayar hutang dan kesempatan kedua hidup yang lebih tenang.
      </div>

      <div class="text-xl font-bold mb-2 mobile:text-xs">
        Informasi
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Tanggal Rilis</div>
        <div>3 Januari 2019</div>
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Sutradara</div>
        <div>Yandy Laurens</div>
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Penulis</div>
        <div>Gina S. Noer, Yandy Laurens</div>
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Perusahaan Produksi</div>
        <div>Visinema Pictures</div>
      </div>
    </div>
  </div>
</template>

<script>
import GiftIcon from '~/assets/icons/Gift.svg?inline'
import PathCircleIcon from '~/assets/icons/PathCircle.svg?inline'
import PlusIcon from '~/assets/icons/PlusCircle.svg?inline'
import UploadIcon from '~/assets/icons/Upload.svg?inline'

export default {
  components: {
    GiftIcon,
    PathCircleIcon,
    PlusIcon,
    UploadIcon
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>