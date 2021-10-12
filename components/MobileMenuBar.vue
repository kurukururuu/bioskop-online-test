<template>
  <div class="fixed left-0 bottom-8 w-full">
    <div class="flex items-center bg-blue-2 bg-opacity-80 rounded-full opacity-50 hover:opacity-100 mx-auto w-fit-content px-8 py-4">
      <!-- <div class="text-white"> -->
        <HomeIcon :width="20" :height="20" fill="white" class="cursor-pointer mr-8" />
        <SearchIcon :width="20" :height="20" stroke="white" class="cursor-pointer mr-8" />
        <PathCircle :width="26" :height="26" fill="transparent" stroke="white" class="cursor-pointer mr-8" />
        <nuxt-link to="/my-account"><UserIcon :width="20" :height="20" stroke="white" class="cursor-pointer" /></nuxt-link>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import HomeIcon from '~/assets/icons/Home.svg?inline'
import SearchIcon from '~/assets/icons/MagnifyingGlass.svg?inline'
import PathCircle from '~/assets/icons/PathCircle.svg?inline'
import UserIcon from '~/assets/icons/User.svg?inline'
export default {
  components: {
    HomeIcon,
    SearchIcon,
    PathCircle,
    UserIcon
  }
}
</script>