<template>
  <div class="payment-info-wrapper m-6">
    <img :src="cover.landscape" alt="cover" class="rounded-lg mb-4">
    <div class="text-lg font-bold">{{ details.name }}</div>
    <div v-if="data.item_type === 'film'" class="flex text-white items-center mb-6">
      <div class="opacity-50 text-xs font-semibold mr-2">{{genre.join(', ')}}</div>
      <div class="opacity-50 text-xs font-semibold mr-2 border rounded-sm px-1">{{details.rating}}</div>
      <div class="opacity-50 text-xs font-semibold">{{details.duration}}</div>
    </div>
    <div class="bg-blue-3 bg-opacity-50 px-6 py-2 rounded-lg mb-6 flex justify-between items-center">
      <div>
        <div class="text-blue-4 font-bold">Pembayaran Berhasil</div>
        <div class="text-blue-4 text-xs opacity-50">Durasi film penyewaan {{data.duration}}</div>
      </div>
      <CheckmarkIcon width="36" height="36" />
    </div>
    <div class="text-center mb-12">
      Terima kasih telah menonton film Indonesia secara legal. 
      Dengan menonton film ini, Anda sudah berkontribusi 
      ikut memajukan perfilman Indonesia dan mendukung 
      para pekerja film yang mengerjakan film ini dengan 
      penuh cinta.<br><br>

      Bioskop Online dilengkapi dengan sistem keamanan dan 
      sistem pelacakan tingkat tinggi untuk pencegahan 
      pembajakan. Pembajakan adalah pelanggaran 
      Undang-Undang Republik Indonesia No. 28 Tahun 2014 
      tentang Hak Cipta dan segala macam upaya hukum 
      secara Pidana akan dilakukan kepada setiap orang dan/atau 
      organisasi yang secara sengaja melakukan pelanggaran.
    </div>

    <div class="flex justify-end items-center">
      <nuxt-link to="/" class="mr-4"><BaseButton dark>Nanti</BaseButton></nuxt-link>
      <nuxt-link :to="getLink()">
        <BaseButton class="px-6 w-fit-content">
          <PlayIcon slot="pre-icon" fill="#011228" :width="15" :height="15" class="mr-1" />
          Nonton Sekarang
        </BaseButton>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CheckmarkIcon from '~/assets/icons/Checkmark.svg?inline'
import PlayIcon from '~/assets/icons/Path.svg?inline'

export default {
  components: {
    CheckmarkIcon,
    PlayIcon
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    details() {
      return this.data.details
    },
    cover() {
      return this.details.cover
    },
    genre() {
      return this.details.genre
    },
  },
  methods: {
    getLink() {
      const data = this.data
      const details = this.details
      const films = this.details.films
      if (data.item_type === 'film') {
        return `/film/${details.id}/watch`
      } else {
        return `/film/${films[0].id}/watch`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-info-wrapper {
  width: 485px;
  
  @media (max-width: 767px) {
    width: 100%;
  }
}
</style>