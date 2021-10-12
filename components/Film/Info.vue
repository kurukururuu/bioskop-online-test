<template>
  <div>
    <div class="flex mb-8">
      <img :src="data.cover" class="mobile:hidden film-cover object-cover rounded-lg">
      <div class="flex flex-col w-full desktop:justify-end desktop:ml-8">
        <div class="flex justify-between items-center">
          <div>
            <div class="text-2xl text-white font-bold">{{data.title}}</div>
            <div class="flex text-white items-center mb-4">
              <div class="opacity-50 text-sm mr-2">{{genre.join(', ')}}</div>
              <div class="opacity-50 text-sm mr-2 border rounded-sm px-1">{{data.rating}}</div>
              <div class="opacity-50 text-sm">{{data.duration}}</div>
            </div>
            <div v-if="data.status === 0" class="text-yellow-primary text-lg font-bold mb-4">
              {{formatter.format(data.price)}}
            </div>
            <div v-else-if="data.status === 1" class="flex items-center mb-10">
              <ClockIcon width="20" height="20" stroke="white" class="mr-3" />
              <div class="text-sm text-white">{{ data.statusText }}</div>
            </div>
            <div v-else-if="data.status === 2" class="flex items-center mb-10">
              <ClockIcon width="20" height="20" stroke="#FFD700" class="mr-3" />
              <div class="text-sm text-yellow-primary">{{ data.statusText }}</div>
            </div>
          </div>
          <div class="flex flex-col items-center desktop:hidden">
            <GiftIcon slot="pre-icon" fill="transparent" stroke="white" width="32" height="32" />
            <div class="text-xxs text-white">Hadiah</div>
          </div>
        </div>

        <div class="flex mobile:grid mobile:grid-cols-3 mobile:gap-3">
          <BaseButton v-if="data.status !== 3" v-bind="$props" class="w-40 mobile:col-span-3 mobile:w-full"
            @click="$emit('action', 'buy-ticket')">
            Beli Tiket
          </BaseButton>
          <BaseButton dark v-bind="$props"
            class="desktop:w-40 border border-white mobile:col-span-1 mobile:w-full mobile:text-xs"
            :class="data.status !== 3 ? 'desktop:ml-4' : ''">
            <PlusIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Daftarku</span>
          </BaseButton>
          <BaseButton dark v-bind="$props"
            class="desktop:w-40 desktop:ml-4 border border-white mobile:col-span-1 mobile:w-full mobile:text-xs">
            <PathCircleIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Trailers</span>
          </BaseButton>
          <BaseButton dark v-bind="$props"
            class="desktop:w-40 desktop:ml-4 border border-white mobile:col-span-1 mobile:w-full mobile:text-xs">
            <UploadIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Bagikan</span>
          </BaseButton>
          <BaseButton v-if="data.status !== 3" dark v-bind="$props"
            class="desktop:w-40 desktop:ml-4 border border-white mobile:hidden mobile:text-xs">
            <GiftIcon slot="pre-icon" fill="transparent" stroke="white" width="20" height="20" class="mr-4 mobile:mr-2" />
            <span class="text-white">Hadiah</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="text-white">
      <div class="text-sm mb-8 mobile:text-xs">
        {{ data.description }}
      </div>

      <div class="text-xl font-bold mb-2 mobile:text-xs">
        Informasi
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Tanggal Rilis</div>
        <div>{{dateConverter(data.releaseDate)}}</div>
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Sutradara</div>
        <div>{{director.join(', ')}}</div>
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Penulis</div>
        <div>{{writer.join(', ')}}</div>
      </div>
      <div class="mb-1 text-sm mobile:text-xxs">
        <div class="opacity-50">Perusahaan Produksi</div>
        <div>{{data.studio}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import GiftIcon from '~/assets/icons/Gift.svg?inline'
import PathCircleIcon from '~/assets/icons/PathCircle.svg?inline'
import PlusIcon from '~/assets/icons/PlusCircle.svg?inline'
import UploadIcon from '~/assets/icons/Upload.svg?inline'
import ClockIcon from '~/assets/icons/ClockWhite.svg?inline'
import formatter from '~/assets/js/helper/currencyFormatter'
import dateConverter from '~/assets/js/helper/convertDate'

export default {
  components: {
    GiftIcon,
    PathCircleIcon,
    PlusIcon,
    UploadIcon,
    ClockIcon
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      formatter, dateConverter
    }
  },
  computed: {
    genre() {
      return this.data.genre || []
    },
    director() {
      return this.data.director || []
    },
    writer() {
      return this.data.writer || []
    }
  }
}
</script>

<style lang="scss" scoped>
.film-cover {
  width: 200px;
  height: 260px;
}
</style>