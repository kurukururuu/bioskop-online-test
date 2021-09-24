<template>
  <div class="text-white layout-info-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" />
      <div class="text-xl font-bold mobile:text-sm">Info Akun</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" />
    </div>

    <div class="font-bold mb-4">Akun</div>

    <div class="flex items-center cursor-pointer">
      <div>
        <div class="text-sm mobile:text-xs">Nomor Handphone</div>
        <div class="text-xs opacity-50 mobile:text-xxs">082111805008</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </div>

    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="flex items-center cursor-pointer">
      <div>
        <div class="text-sm mobile:text-xs">Alamat Email</div>
        <div class="text-xs"><span class="opacity-50">mantis.ch@gmail.com</span> <span class="text-green-600">(Terverifikasi)</span></div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </div>

    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="flex items-center cursor-pointer">
      <div>
        <div class="text-sm mobile:text-xs">Password</div>
        <div class="text-xs opacity-50 mobile:text-xxs">password disembunyikan</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </div>

    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="font-bold mb-4 mt-8">Biodata</div>

    <div class="flex items-center cursor-pointer">
      <div>
        <div class="text-sm mobile:text-xs">Nama</div>
        <div class="text-xs opacity-50 mobile:text-xxs">Mantis</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </div>

    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="flex items-center cursor-pointer">
      <div>
        <div class="text-sm mobile:text-xs">Jenis Kelamin</div>
        <div class="text-xs opacity-50 mobile:text-xxs">Laki-laki</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </div>

    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="flex items-center cursor-pointer">
      <div>
        <div class="text-sm mobile:text-xs">Tanggal Lahir</div>
        <div class="text-xs opacity-50 mobile:text-xxs">18 Agustus 1990</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </div>

    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="flex items-center cursor-pointer">
      <div>
        <div class="text-sm mobile:text-xs">Lokasi</div>
        <div class="text-xs opacity-50 mobile:text-xxs">Jl. Cilandak V No 18, Jakarta Selatan</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </div>

    <div class="border border-opacity-20 w-full my-4"></div>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    ChevronRight,
    XIcon
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-info-wrapper {
    width: 500px;
    @apply p-8 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-info-wrapper {
    width: 100%;
  }
}
</style>