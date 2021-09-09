<template>
  <div class="fixed bottom-0 left-0 w-full bg-blue-1 text-white">
    <div class="container mx-auto py-16 pt-4">
      <div class="flex justify-between">
        <div>
          <div class="flex mb-2">
            <nuxt-link to="/about" class="font-semibold mr-5">Tentang Bioskop Online</nuxt-link>
            <nuxt-link to="/terms-condition" class="font-semibold mr-5">Syarat Pengguna</nuxt-link>
            <nuxt-link to="/user-privacy" class="font-semibold mr-5">Kebijakan Privasi</nuxt-link>
            <nuxt-link to="/feedback" class="font-semibold">Masukan</nuxt-link>
          </div>

          <div class="text-sm">© 2020 Bioskop Online dan semua perusahaan terkait.<br>Hak cipta dilindungi undang-undang. </div>
        </div>

        <div>
          <div class="font-semibold mb-4">Terhubung dengan kami</div>
          <div class="flex">
            <InstagramBlack width="36" height="36" class="mr-4" />
            <FacebookBlack width="36" height="36" class="mr-4" />
            <TwitterBlack width="36" height="36" class="mr-4" />
            <YoutubeBlack width="36" height="36" class="mr-4" />
          </div>
        </div>

        <div>
          <div class="font-semibold mb-4">Terhubung dengan kami</div>
          <div class="flex">
            <GPlayButton class="mr-4" />
            <AppStoreButton class="mr-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookBlack from '~/assets/icons/FacebookBlack.svg?inline'
import InstagramBlack from '~/assets/icons/InstagramBlack.svg?inline'
import TwitterBlack from '~/assets/icons/TwitterBlack.svg?inline'
import YoutubeBlack from '~/assets/icons/YoutubeBlack.svg?inline'
import GPlayButton from '~/assets/icons/GooglePlayButton.svg?inline'
import AppStoreButton from '~/assets/icons/AppStoreButton.svg?inline'

export default {
  components: {
    FacebookBlack,
    InstagramBlack,
    TwitterBlack,
    YoutubeBlack,
    GPlayButton,
    AppStoreButton
  },
}
</script>