<template>
  <div class="flex mobile:flex-col">
    <img :src="cover.landscape" alt="film" class="film-cover mr-5 mobile:mr-0">
    <div class="flex flex-col justify-between">
      <div>
        <div class="text-xl font-bold mb-2">{{ filmData.title }}</div>
        <div class="text-sm font-normal mb-2">{{ modifiedDescription }}</div>
        <!-- <div class="text-xs text opacity-50">Berlaku sampai {{new Date(timestamp.duration).toLocaleString()}}</div> -->
        <div class="text-xs text opacity-50">Berlaku sampai {{expired(data.expired)}} WIB</div>
      </div>
      <div class="flex items-center" :class="filmData.duration ? 'justify-between' : 'justify-end'">
        <div v-if="filmData.duration" class="bg-blue-2 bg-opacity-50 p-2 flex items-center rounded-full mr-4">
          <div class="p-2 bg-blue-4 bg-opacity-40 rounded-full"><PathIcon fill="#9BC7FD" width="8" height="8" /></div>
          <div class="text-xs font-bold text-blue-4 ml-2">19 Menit</div>
        </div>
        <div>
          <button class="text-sm font-semibold mr-8" @click="$router.push(`/film/${filmData.id}`)">Detail</button>
          <button class="text-sm font-semibold px-5 py-2 border border-blue-4 rounded-full">
            Nonton
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PathIcon from '~/assets/icons/Path.svg?inline'
// eslint-disable-next-line import/order
import moment from 'moment'

export default {
  components: {
    PathIcon
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
    modifiedDescription() {
      const desc = this.filmData.description
      const maxlength = 100
      if (desc.length < maxlength) return desc

      let returnedText = ''
      const splitted = desc.split(' ')
      for (let i = 0; i < splitted.length; i++) {
        const text = splitted[i];
        if (returnedText.length < maxlength) {
          returnedText += `${text} `
        } else {
          returnedText += '...'
          break
        }
      }

      return returnedText
    },
    filmData() {
      return this.data.film
    },
    cover() {
      return this.filmData.cover
    },
    timestamp() {
      return this.data.timestamp
    },
  },
  mounted() {
    window.mine = this
  },
  methods: {
    expired(e) {
      const date = moment(e).format('DD MMM YYYY h:mm')
      return date
    }
  }
}
</script>

<style scoped lang="scss">
.film-cover {
  width: 300px;
  height: 150px;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-bottom: 8px;
  }
}
</style>