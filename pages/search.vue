<template>
  <div class="py-8">
    <div class="container mx-auto">
      <div class="flex items-center justify-between mb-7">
        <div class="bg-blue-2 rounded-full p-5 flex items-center w-96">
          <SearchIcon :width="20" :height="20" stroke="white" class="mr-3" />
          <input v-model="keyword" type="text" placeholder="Cari berdasarkan judul, genre, pemain" class="bg-transparent text-white mobile:text-sm w-full">
        </div>

        <nuxt-link to="/"><XIcon :width="30" :height="30" fill="white" class="cursor-pointer ml-auto" /></nuxt-link>
      </div>

      <div class="flex mb-8 overflow-x-auto">
        <template v-for="(tag, i) in tags">
          <div :key="i" class="rounded-full border border-blue-4 border-opacity-50 py-2 px-4 text-center mr-4 cursor-pointer"
            :class="tag.value === query.tags.value ? 'bg-blue-4 bg-opacity-50' : ''"
            @click="selectTag(tag)">
            {{ tag.text }}
          </div>
        </template>
      </div>

      <SearchResult :result="list" />
    </div>
  </div>
</template>

<script>
import SearchIcon from '~/assets/icons/MagnifyingGlass.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import Film from '~/assets/js/models/Film'
import debounce from '~/assets/js/helper/debounce'

export default {
  components: {
    SearchIcon,
    XIcon
  },
  data() {
    return {
      tags: [
        {
          text: 'Semua',
          value: ''
        },
        {
          text: 'Horror',
          value: 'horror'
        },
        {
          text: 'Romance',
          value: 'romance'
        },
        {
          text: 'Action',
          value: 'action'
        }
      ],
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      query: {
        perPage: 10,
        page: 1,
        tags: {value: ''}
      },
      keyword: null
    }
  },
  computed: {
    list() {
      const films = []
      const film = new Film()
      for (let i = 0; i < 30; i++) {
        films.push(film.createDummy())
      }
      return films
    },
  },
  watch: {
    keyword: debounce(function (newVal) {
      if (newVal.length < 3 && newVal.length > 0) { return }
      this.query.page = 1
      this.actionSearch()
    }, 1000)
  },
  methods: {
    actionSearch () {
      this.query.key = this.keyword
    },
    selectTag(tag) {
      this.query.tags = tag
    }
  }
}
</script>
