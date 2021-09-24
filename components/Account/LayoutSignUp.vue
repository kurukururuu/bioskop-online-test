<template>
  <div class="flex flex-col rounded-2xl desktop:w-fit-content bg-blue-1 p-8">
    <div class="mb-14">
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer ml-auto mobile:hidden" />
    </div>
    <BaseButton dark class="mb-6 px-5 w-full mobile:w-full">
      <div class="mr-auto text-white">Buat Akun Bioskop Online</div>
      <ArrowCircleRight slot="post-icon" class="ml-auto my-3" fill="white" :width="24" :height="24" />
    </BaseButton>
    <div class="text-center border-b border-opacity-20 mt-4 mx-5 text-white mb-6" style="line-height: 0.1em;">
      <span class="bg-blue-1 pt-0 px-3">Atau daftar dengan</span>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2">
        <div class="flex items-center">
          <GoogleIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Google</div>
        </div>
      </BaseButton>
      <BaseButton dark class="mobile:col-span-1 mobile:w-full px-2">
        <div class="flex items-center">
          <FacebookIcon width="24" height="24" class="mr-4" />
          <div class="mr-auto text-white">Facebook</div>
        </div>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import ArrowCircleRight from '~/assets/icons/ArrowCircleRight.svg?inline'
import FacebookIcon from '~/assets/icons/Facebook.svg?inline'
import GoogleIcon from '~/assets/icons/Google.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    ArrowCircleRight,
    FacebookIcon,
    GoogleIcon,
    XIcon
  }  
}
</script>