<template>
  <div @click="closeModal()" class="overlay">
    <div @click="stopPropogation" class="modal">
      <h3 class="modal__title">
        Unstake
      </h3>
      <div class="modal-body">
        <input min="0" step="0.1" v-model="inputValue" type="number" />
        <div class="arrows">
          <span @click.stop="increase()" class="top-arrow">
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 -3.93402e-07L9.5 5L0.5 5L5 -3.93402e-07Z"
                fill="#D4D4D4"
              />
            </svg>
          </span>
          <span @click.stop="decrease()" class="bottom-arrow">
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5L0.5 0L9.5 5.04736e-07L5 5Z" fill="#D4D4D4" />
            </svg>
          </span>
        </div>

        <button
          @click="unstake"
          class="modal-body__button btn"
          :disabled="inputValue <= 0"
        >
          Unstake
        </button>
      </div>
      <div @click.stop="closeModal()" class="modal-close">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="19.4247"
            y="5.98965"
            width="19"
            height="2"
            transform="rotate(135 19.4247 5.98965)"
            fill="white"
          />
          <rect
            x="18.0105"
            y="19.4247"
            width="19"
            height="2"
            transform="rotate(-135 18.0105 19.4247)"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { sendTransaction as unstakeLpSend } from "@/helpers/contractFunctions/lpStaking";
import { toWei } from "@/helpers/contractFunctions/base";

export default {
  name: "UnstakeModal",
  data() {
    return {
      inputValue: 0
    };
  },
  computed: {
    ...mapGetters({
      account: "ethereum/account"
    })
  },
  methods: {
    decrease() {
      this.inputValue = Math.max(0, parseFloat(this.inputValue) - 0.1);
    },
    increase() {
      this.inputValue = parseFloat(this.inputValue) + 0.1;
    },
    closeModal() {
      this.$emit("closeModal");
    },
    stopPropogation: function(event) {
      event.stopImmediatePropagation();
    },
    async unstake() {
      const unstakeValueInWei = toWei(parseFloat(this.inputValue));
      await unstakeLpSend("unstake", [unstakeValueInWei], {
        from: this.account
      });
    }
  }
};
</script>

<style scoped></style>
