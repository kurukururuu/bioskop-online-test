<template>
  <div class="flex justify-between">
    <div class="flex items-center">
      <template v-if="method === 'qris'">
        <QrisIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">QRIS</div>
      </template>
      <template v-else-if="method === 'cc'">
        <CCIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">Kartu Pembayaran</div>
      </template>
      <template v-else-if="method === 'bca'">
        <BCAIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">BCA Virtual Account</div>
      </template>
      <template v-else-if="method === 'telkomsel'">
        <TelkomselIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">TELKOMSEL</div>
      </template>
      <template v-else-if="method === 'tri'">
        <TriIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">TRI</div>
      </template>
      <template v-else-if="method === 'smartfren'">
        <SmartfrenIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">Smartfren</div>
      </template>
      <template v-else-if="method === 'xl'">
        <XLIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">XL</div>
      </template>
      <template v-else-if="method === 'indosat'">
        <IndosatIcon :width="24" :height="24" class="mr-3" />
        <div class="text-sm font-bold uppercase">Indosat</div>
      </template>
    </div>
    <BaseButton dark size="small" class="border border-blue-4">
      Ganti
    </BaseButton>
  </div>
</template>

<script>
import QrisIcon from '~/assets/icons/Qris.svg?inline'
import CCIcon from '~/assets/icons/CreditCard.svg?inline'
import BCAIcon from '~/assets/icons/BCA.svg?inline'
import TelkomselIcon from '~/assets/icons/Telkomsel.svg?inline'
import TriIcon from '~/assets/icons/Tri.svg?inline'
import SmartfrenIcon from '~/assets/icons/Smartfren.svg?inline'
import XLIcon from '~/assets/icons/XL.svg?inline'
import IndosatIcon from '~/assets/icons/Indosat.svg?inline'

export default {
  components: {
    QrisIcon,
    CCIcon,
    BCAIcon,
    TelkomselIcon,
    TriIcon,
    SmartfrenIcon,
    XLIcon,
    IndosatIcon
  },
  props: {
    method: {
      type: String,
      default() {
        return null
      }
    }
  }
}
</script>