<template>
  <div class="fixed top-0 left-0 w-full bg-blue-1 bg-opacity-20">
    <div class="container mx-auto py-4">
      <div class="flex justify-between">
        <Logo @click="$router.push('/')" />
        <div class="flex items-center text-white">
          <nuxt-link to="/" class="mr-8">Beranda</nuxt-link>
          <nuxt-link to="/my-collection" class="mr-8">Film Saya</nuxt-link>
          <button class="px-4 py-2 bg-blue-2 bg-opacity-20 border border-opacity-20 rounded-full cursor-pointer flex items-center mr-8">
            <span>Cari</span>
            <SearchIcon :width="16" :height="16" stroke="white" class="cursor-pointer ml-4" />
          </button>
          <TicketIcon :width="20" :height="20" fill="white" class="cursor-pointer mr-8" />
          <NotificationIcon :width="20" :height="20" stroke="white" class="cursor-pointer mr-8" />
          <div class="bg-blue-4 p-2 rounded-full"><UserIcon :width="16" :height="16" fill="black" stroke="black" class="cursor-pointer" /></div>
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
  }
}
</script>