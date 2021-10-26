<template>
  <div class="text-white layout-info-wrapper">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$router.push('/my-account')" />
      <div class="text-xl font-bold mobile:text-sm">Info Akun</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$router.push('/my-account')" />
    </div>

    <div class="font-bold mb-4">Akun</div>

    <button class="flex items-center cursor-pointer w-full text-left" @click="$emit('open-menu', 'editPhone')">
      <div>
        <div class="text-sm mobile:text-xs">Nomor Handphone</div>
        <div class="text-xs opacity-50 mobile:text-xxs">{{ data.phone }}</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </button>

    <div class="border border-opacity-20 w-full my-4"></div>

    <button class="flex items-center cursor-pointer w-full text-left" @click="$emit('open-menu', 'editEmail')">
      <div>
        <div class="text-sm mobile:text-xs">Alamat Email</div>
        <div class="text-xs"><span class="opacity-50">{{ data.email }}</span> <span class="text-green-600">(Terverifikasi)</span></div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </button>

    <div class="border border-opacity-20 w-full my-4"></div>

    <button class="flex items-center cursor-pointer w-full text-left" @click="$emit('open-menu', 'editPassword')">
      <div>
        <div class="text-sm mobile:text-xs">Password</div>
        <div class="text-xs opacity-50 mobile:text-xxs">password disembunyikan</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </button>

    <div class="border border-opacity-20 w-full my-4"></div>

    <div class="font-bold mb-4 mt-8">Biodata</div>

    <button class="flex items-center cursor-pointer w-full text-left" @click="$emit('open-menu', 'editName')">
      <div>
        <div class="text-sm mobile:text-xs">Nama</div>
        <div class="text-xs opacity-50 mobile:text-xxs">{{ data.name }}</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </button>

    <div class="border border-opacity-20 w-full my-4"></div>

    <button class="flex items-center cursor-pointer w-full text-left" @click="$emit('open-menu', 'editGender')">
      <div>
        <div class="text-sm mobile:text-xs">Jenis Kelamin</div>
        <div class="text-xs opacity-50 mobile:text-xxs">{{ data.gender }}</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </button>

    <div class="border border-opacity-20 w-full my-4"></div>

    <button class="flex items-center cursor-pointer w-full text-left" @click="$emit('open-menu', 'editBirthDate')">
      <div>
        <div class="text-sm mobile:text-xs">Tanggal Lahir</div>
        <div class="text-xs opacity-50 mobile:text-xxs">{{ new Date(data.dob).toDateString() }}</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </button>

    <div class="border border-opacity-20 w-full my-4"></div>

    <button class="flex items-center cursor-pointer w-full text-left" @click="$emit('open-menu', 'editLocation')">
      <div>
        <div class="text-sm mobile:text-xs">Lokasi</div>
        <div class="text-xs opacity-50 mobile:text-xxs">{{ data.location }}</div>
      </div>
      <ChevronRight :width="16" :height="16" class="ml-auto" />
    </button>

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