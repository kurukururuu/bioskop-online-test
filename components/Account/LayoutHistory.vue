<template>
  <div class="text-white layout-history-wrapper h-full overflow-hidden">
    <div class="flex justify-between items-center mb-4 mobile:justify-start">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" @click="$router.push('/my-account')" />
      <div class="text-xl font-bold mobile:text-lg">Riwayat Pembayaran</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer mobile:hidden" @click="$router.push('/my-account')" />
    </div>
    
    <div class="border border-opacity-20 w-full my-5 desktop:hidden"></div>

    <div class="h-full overflow-auto custom-scrollbar px-2">
      <div v-for="(item, i) in list" :key="i">
        <AccountHistoryItem :data="item" @details-opened="openDetails" />
        <div class="border border-opacity-20 w-full my-5"></div>
      </div>
    </div>

    <Modal name="history-details"
      :click-to-close="false"
      classes="modal-classes"
      width="400px"
      height="auto">
      <AccountHistoryDetails :data="modalContent" @cancel="$modal.hide('history-details')" />
    </Modal>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'
import HistoryPayment from '~/assets/js/models/HistoryPayment'

export default {
  components: {
    ChevronRight,
    XIcon
  },
  data() {
    return {
      modalContent: {}
    }
  },
  computed: {
    list() {
      // dummies
      const hist = new HistoryPayment()
      const arr = []
      for (let i = 0; i < 10; i++) {
        arr.push(hist.createDummy())
      }
      // console.log(arr)
      return arr
    }
  },
  methods: {
    openDetails(v) {
      console.log('details', v.item_type, v)
      this.modalContent = v
      this.$modal.show('history-details')
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .layout-history-wrapper {
    width: 500px;
    @apply p-4 m-4 border border-opacity-20 rounded-2xl;
  }
}
@media (max-width: 767px) {
  .layout-history-wrapper {
    width: 100%;
  }
}
</style>