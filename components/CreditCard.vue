<template>
  <!-- <div class="wrapper"> -->
    <div class="card-form">
      <form class="card-form__inner" @submit.prevent="handleSubmit">
        <div class="card-list mb-4">
          <div class="card-item" :class="{ '-active' : isCardFlipped }">
            <div class="card-item__side -front">
              <div ref="focusElement" class="card-item__focus" :class="{'-active' : focusElementStyle }" :style="focusElementStyle"></div>
              <div class="card-item__cover">
                <img
                :src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" class="card-item__bg">
              </div>
              
              <div class="card-item__wrapper">
                <div class="card-item__top">
                  <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" class="card-item__chip">
                  <div class="card-item__type">
                    <transition name="slide-fade-up">
                      <img v-if="getCardType" :key="getCardType" :src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" alt="" class="card-item__typeImg">
                    </transition>
                  </div>
                </div>
                <label ref="cardNumber" for="cardNumber" class="card-item__number">
                  <template v-if="getCardType === 'amex'">
                  <span v-for="(n, $index) in amexCardMask" :key="$index">
                    <transition name="slide-fade-up">
                      <div
                        v-if="$index > 4 && $index < 14 && cardNumber.length > $index && n.trim() !== ''"
                        class="card-item__numberItem"
                      >*</div>
                      <div v-else-if="cardNumber.length > $index"
                        :key="$index"
                        class="card-item__numberItem" :class="{ '-active' : n.trim() === '' }">
                        {{cardNumber[$index]}}
                      </div>
                      <div
                        v-else
                        :key="$index + 1"
                        class="card-item__numberItem"
                        :class="{ '-active' : n.trim() === '' }"
                      >{{n}}</div>
                    </transition>
                  </span>
                  </template>

                  <template v-else>
                    <span v-for="(n, $index) in otherCardMask" :key="$index">
                      <transition name="slide-fade-up">
                        <div
                          v-if="$index > 4 && $index < 15 && cardNumber.length > $index && n.trim() !== ''"
                          class="card-item__numberItem"
                        >*</div>
                        <div v-else-if="cardNumber.length > $index"
                          :key="$index"
                          class="card-item__numberItem" :class="{ '-active' : n.trim() === '' }">
                          {{cardNumber[$index]}}
                        </div>
                        <div
                          v-else
                          :key="$index + 1"
                          class="card-item__numberItem"
                          :class="{ '-active' : n.trim() === '' }"
                        >{{n}}</div>
                      </transition>
                    </span>
                  </template>
                </label>
                <div class="card-item__content">
                  <label ref="cardName" for="cardName" class="card-item__info">
                    <div class="card-item__holder">Card Holder</div>
                    <transition name="slide-fade-up">
                      <div v-if="cardName.length" key="1" class="card-item__name">
                        <transition-group name="slide-fade-right">
                          <span v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" :key="$index + 1" class="card-item__nameItem">
                            <template v-if="$index === $index">
                              {{n}}
                            </template>
                          </span>
                        </transition-group>
                      </div>
                      <div v-else key="2" class="card-item__name">Full Name</div>
                    </transition>
                  </label>
                  <div ref="cardDate" class="card-item__date">
                    <label for="cardMonth" class="card-item__dateTitle">Expires</label>
                    <label for="cardMonth" class="card-item__dateItem">
                      <transition name="slide-fade-up">
                        <span v-if="cardMonth" :key="cardMonth">{{cardMonth}}</span>
                        <span v-else key="2">MM</span>
                      </transition>
                    </label>
                    /
                    <label for="cardYear" class="card-item__dateItem">
                      <transition name="slide-fade-up">
                        <!-- <span v-if="cardYear" :key="cardYear">{{String(cardYear).slice(2,4)}}</span> -->
                        <span v-if="cardYear" :key="cardYear">{{cardYear}}</span>
                        <span v-else key="2">YY</span>
                      </transition>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-item__side -back">
              <div class="card-item__cover">
                <img
                :src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" class="card-item__bg">
              </div>
              <div class="card-item__band"></div>
              <div class="card-item__cvv">
                  <div class="card-item__cvvTitle">CVV</div>
                  <div class="card-item__cvvBand">
                    <span v-for="(n, $index) in cardCvv" :key="$index">
                      *
                    </span>

                </div>
                  <div class="card-item__type">
                      <img v-if="getCardType" :src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" class="card-item__typeImg">
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mobile:grid-cols-3">
          <div class="card-input col-span-1 mobile:col-span-2">
            <label for="cardNumber" class="card-input__label">Card Number</label>
            <input id="cardNumber"
              v-mask="generateCardNumberMask"
              :value="cardNumber"
              required
              type="text" class="card-input__input"
              data-ref="cardNumber"
              autocomplete="off"
              @input="e => cardNumber = e.target.value"
              @focus="focusInput"
              @blur="blurInput">
          </div>
          <!-- <div class="card-input col-span-1">
            <label for="cardName" class="card-input__label">Card Holders</label>
            <input id="cardName" v-model="cardName" type="text" class="card-input__input" data-ref="cardName" autocomplete="off" @focus="focusInput" @blur="blurInput">
          </div> -->
          <div class="card-form__col -cvv col-span-1">
            <div class="card-input w-7 mobile:w-full">
              <label for="cardCvv" class="card-input__label">CVV2</label>
              <input id="cardCvv" v-model="cardCvv" v-mask="'###'" required minlength="3" type="number" class="card-input__input" maxlength="4" autocomplete="off" @focus="flipCard(true)" @blur="flipCard(false)"
                @input="actionLimit">
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mobile:grid-cols-3">
          <div class="card-input col-span-1 mobile:col-span-2">
            <label for="cardName" class="card-input__label">Name on card</label>
            <input
              id="cardName"
              :value="cardName"
              required type="text"
              class="card-input__input"
              data-ref="cardName"
              autocomplete="off"
              @input="e => cardName = e.target.value.toUpperCase()"
              @focus="focusInput"
              @blur="blurInput">
          </div>
          <div class="card-input w-11 mobile:col-span-1 mobile:w-full">
            <label for="cardMonth" class="card-input__label">Valid(MM/YY)</label>
            <input id="cardMonth" v-model="cardDate" v-mask="'##/##'" required type="text" pattern="(?:0[1-9]|1[0-2])/[0-9]{2}" class="card-input__input" data-ref="cardDate" @focus="focusInput" @blur="blurInput">
          </div>
        </div>
        <!-- <div class="card-form__row">
          <div class="card-form__col">
            <div class="card-form__group">
              <label for="cardMonth" class="card-input__label">Expiration Date</label>
              <select id="cardMonth" v-model="cardMonth" class="card-input__input -select" data-ref="cardDate" @focus="focusInput" @blur="blurInput">
                <option value="" disabled selected>Month</option>
                <option v-for="n in 12" :key="n" :value="n < 10 ? '0' + n : n" :disabled="n < minCardMonth">
                  {{10 > n ? '0' + n : n}}
                </option>
              </select>
              <select id="cardYear" v-model="cardYear" class="card-input__input -select" data-ref="cardDate" @focus="focusInput" @blur="blurInput">
                <option value="" disabled selected>Year</option>
                <option v-for="(n, $index) in 12" :key="n" :value="$index + minCardYear">
                    {{$index + minCardYear}}
                </option>
              </select>
            </div>
          </div>
          <div class="card-form__col -cvv">
            <div class="card-input">
              <label for="cardCvv" class="card-input__label">CVV</label>
              <input id="cardCvv" v-model="cardCvv" v-mask="'####'" type="text" class="card-input__input" maxlength="4" autocomplete="off" @focus="flipCard(true)" @blur="flipCard(false)">
            </div>
          </div>
        </div> -->

        <!-- <button class="card-form__button">
          Lanjutkan
        </button> -->

        <BaseButton class="w-full mobile:w-full mt-10 mobile:mt-auto mb-8">
          Proses Pembayaran
        </BaseButton>
      </form>
    </div>
  <!-- </div> -->
</template>

<script>
/* eslint-disable prefer-regex-literals */
/* eslint-disable vue/require-default-prop */
import { VueMaskDirective } from 'v-mask'

export default {
  directives: {'mask': VueMaskDirective},
  props: {
    labels: Object,
    fields: Object,
    isCardNumberMasked: Boolean,
    randomBackgrounds: {
      type: Boolean,
      default: true
    },
    backgroundImage: [String, Object]
  },
  data() {
    return {
      currentCardBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
      cardName: "",
      cardNumber: "",
      cardDate: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false
    };
  },
  computed: {
    getCardType () {
      const number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";
      
      re = new RegExp('^9792')
      if (number.match(re) != null) return 'troy'

      return "visa"; // default type
    },
		generateCardNumberMask () {
			return this.getCardType === "amex" ? this.amexCardMask : this.otherCardMask;
    },
    minCardMonth () {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    }
  },
  watch: {
    cardYear (v) {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      } else if (this.cardMonth > 12) {
        this.cardDate = `0${this.cardMonth[0]}/${this.cardMonth[1]}`
      }
    },
    cardDate(v) {
      const splitted = v.split('/')
      const month = splitted[0]
      const year = splitted[1]
      this.cardMonth = month
      this.cardYear = year
    }
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  methods: {
    actionLimit (e) {
      const number = /^\d+$/
      if (number.test(e.target.value)) {
        e.target.value = e.target.value.slice(0, e.target.maxLength)
      }
    },
    flipCard (status) {
      this.isCardFlipped = status;
    },
    focusInput (e) {
      this.isInputFocused = true;
      const targetRef = e.target.dataset.ref;
      const target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`
      }
    },
    blurInput() {
      const vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    },
    handleSubmit() {
      const form = {
        cvv: this.cardCvv,
        date: this.cardDate,
        name: this.cardName,
        number: this.cardNumber,
      }
      console.log("submit cc", form)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/credit-card.scss';
</style>

<style scoped lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.card-form__inner {
  // @apply bg-blue-2;
  @apply bg-transparent;

  .card-input {
    input {
      @apply text-white;
    }

    &__label {
      @apply text-gray-500;
    }
  }
  
  .card-input__input {
    &.-select {
      @apply text-white;

      *::after {
        color: white;
      }
      
      option {
        @apply text-black;
      }
    }
  }
}
</style>