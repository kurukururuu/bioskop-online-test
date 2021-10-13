<template>
  <div class="w-full bg-blue-1 bg-opacity-20 transition-all duration-300 ease-in-out hover:bg-blue-2 hover:bg-opacity-80"
    :class="stickyHeader ? 'fixed top-0 left-0' : ''">

    <div class="header container mx-auto py-4">
      <div class="flex justify-between">
        <Logo class="cursor-pointer" @click="$router.push('/')" />
        <div class="flex items-center text-white">
          <nuxt-link to="/" class="mr-8 mobile:hidden">Beranda</nuxt-link>
          <nuxt-link to="/my-collection" class="mr-8 mobile:hidden">Film Saya</nuxt-link>
          <button class="px-4 py-2 bg-blue-2 bg-opacity-20 border border-opacity-20 rounded-full cursor-pointer flex items-center mr-8 mobile:hidden">
            <span>Cari</span>
            <SearchIcon :width="16" :height="16" stroke="white" class="cursor-pointer ml-4" />
          </button>
          <template v-if="isLoggedIn">
            <TicketIcon :width="20" :height="20" fill="white" class="cursor-pointer mr-8" />
            <NotificationIcon :width="20" :height="20" stroke="white" class="cursor-pointer mr-8" />
            <nuxt-link to="/my-account" class="bg-blue-4 p-2 rounded-full mobile:hidden"><UserIcon :width="16" :height="16" fill="black" stroke="black" class="cursor-pointer" /></nuxt-link>
          </template>
          <template v-else>
            <BaseButton dark size="small" class="border border-blue-4 mr-4" @click="$emit('action', 'sign-up')">Daftar</BaseButton>
            <BaseButton size="small" @click="$emit('action', 'sign-in')">Masuk</BaseButton>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/assets/Logo.svg?inline'
import NotificationIcon from '~/assets/icons/Bell.svg?inline'
import TicketIcon from '~/assets/icons/TicketWhite.svg?inline'
import SearchIcon from '~/assets/icons/MagnifyingGlass.svg?inline'
import UserIcon from '~/assets/icons/User.svg?inline'

export default {
  components: {
    Logo,
    NotificationIcon,
    TicketIcon,
    SearchIcon,
    UserIcon
  },
  props: {
    stickyHeader: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    isLoggedIn() {
      return false
    }
  },
  mounted() {
    window.navbar = this
  }
}
</script>