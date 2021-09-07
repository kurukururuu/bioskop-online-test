<template>
  <div class="px-10 py-7 bg-blue-1 w-1/2 mobile:w-full rounded-2xl mobile:p-0">
    <div class="flex justify-between items-center mb-8 mobile:justify-start mobile:mb-5 mobile:px-4 mobile:py-3">
      <ChevronRight :width="28" :height="28" class="mr-4 transform rotate-180 bg-white bg-opacity-40 rounded-full p-2 cursor-pointer desktop:hidden" />
      <div class="text-xl font-bold text-white">Buat Akun Bioskop Online</div>
      <XIcon :width="20" :height="20" fill="white" class="cursor-pointer ml-auto mobile:hidden" />
    </div>
    
    <div class="border border-opacity-20 w-full my-4 desktop:hidden"></div>

    <form @submit.prevent="actionRegister">
      <div class="grid grid-cols-2 gap-8 mobile:gap-3 mobile:px-5">
        <div class="col-span-1 mobile:col-span-2">
          <div class="font-bold mb-4 text-white">Akun</div>
            <BaseInput v-model="form.name" required label="Nama Lengkap" name="name" />
            <BaseInput v-model="form.phone" required label="Nomor Telepon" name="phone" type="number" />
            <BaseInput v-model="form.email" required label="Alamat Email" name="email" type="email" />
            <BaseInput v-model="form.password" password required label="Buat Password" name="password" type="password" helper-text="*Password harus terdiri dari huruf kecil dan besar serta angka" />
        </div>
        <div class="col-span-1 mobile:col-span-2">
          <div class="font-bold mb-4 text-white">Biodata</div>
            <BaseSelect v-model="form.gender" :options="['Laki-laki', 'Perempuan']" required label="Jenis Kelamin" class="w-full" type="select" />
            <BaseInput v-model="form.dob" required label="Tanggal Lahir" name="dob" type="date" />
            <BaseInput v-model="form.location" required label="Lokasi" name="location" @focus="openLocationPopup">
              <MarkerIcon slot="post-icon" :width="18" :height="18" fill="transparent" />
            </BaseInput>
        </div>
      </div>
      
      <div class="border border-opacity-20 w-full mt-12 desktop:hidden"></div>

      <div class="grid grid-cols-2 gap-8 mt-20 mobile:px-5 mobile:mt-2 mobile:gap-4">
        <div class="col-span-1 flex items-center mobile:col-span-2">
          <div class="text-xxs text-white">
            Dengan ini saya menyatakan setuju dengan <span class="text-blue-4">syarat&ketentuan</span> yang di berikan oleh PT BIOSKOP ONLINE digital
          </div>
        </div>
        <BaseButton class="col-span-1 ml-auto mobile:col-span-2 mobile:w-full mobile:mb-5">Lanjutkan</BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import ChevronRight from '~/assets/icons/ChevronRight.svg?inline'
import MarkerIcon from '~/assets/icons/PinMarker.svg?inline'
import XIcon from '~/assets/icons/XIcon.svg?inline'

export default {
  components: {
    ChevronRight,
    MarkerIcon,
    XIcon
  },
  data () {
    return {
      form: {}
    }
  },
  watch: {
    'form.phone' (v) {
      const pattern = /^\d+$/
      if (!pattern.test(v)) {
        this.form.phone = v.slice(0, -1)
      }

      if (v.length > 18) {
        this.form.phone = v.slice(0, -1)
      }
    },
  },
  methods: {
    actionRegister() {
      console.log('register', this.form)
    },
    openLocationPopup() {
      console.log('opening popup location')
    }
  }
}
</script>