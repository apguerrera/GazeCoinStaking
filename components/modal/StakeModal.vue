<template>
  <div @click="closeModal()" class="overlay">
    <div @click="stopPropogation" class="modal">
      <h3 class="modal__title">
        Stake
      </h3>
      <div class="modal-body">
        <input
          min="0"
          step="0.1"
          v-model="inputValue"
          type="number"
          @input="approvalFormCom"
        />
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
          @click="approve"
          class="modal-body__button btn"
          :disabled="isApproveDisabled"
        >
          Approve
        </button>
        <button
          @click="stake"
          class="modal-body__button btn"
          :disabled="isStakeDisabled"
        >
          Stake
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
import {
  sendTransaction as lpTokenSend,
  makeBatchCall as callLpToken
} from "@/helpers/contractFunctions/lpToken";
import {
  sendTransaction as stakeLpSend,
  getAddress as getLpStakingAddress
} from "@/helpers/contractFunctions/lpStaking";
import { toWei, fromWei } from "@/helpers/contractFunctions/base";

export default {
  name: "StakeModal",
  data() {
    return {
      inputValue: 0,
      isApproveDisabled: true,
      isStakeDisabled: true,
      lpTokenModel: {
        tokenBalance: 0,
        allowance: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      account: "ethereum/account"
    })
  },
  async mounted() {
    await this.getLpTokenData();
  },
  methods: {
    decrease() {
      if (+this.inputValue > 0) {
        this.inputValue = parseFloat(this.inputValue) - 0.1;
      }
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
    approvalFormCom() {
      this.isApproveDisabled = true;
      this.isStakeDisabled = true;

      const isLowwerThenTokenBalance =
        +this.inputValue <= +fromWei(this.lpTokenModel.tokenBalance);
      const isRightAllowance =
        +this.inputValue > 0 &&
        +this.inputValue > +fromWei(this.lpTokenModel.allowance);

      if (this.lpTokenModel.tokenBalance > 0) {
        if (isLowwerThenTokenBalance && isRightAllowance) {
          this.isApproveDisabled = false;
        } else {
          this.isStakeDisabled =
            +this.inputValue <= 0 || !isLowwerThenTokenBalance;
        }
      }
    },
    async getLpTokenData() {
      const methods = [
        { methodName: "balanceOf", args: [this.account] },
        { methodName: "allowance", args: [this.account, getLpStakingAddress()] }
      ];
      [
        this.lpTokenModel.tokenBalance,
        this.lpTokenModel.allowance
      ] = await callLpToken(methods);

      this.approvalFormCom();
    },
    async approve() {
      const approveValueInWei = toWei(parseFloat(this.inputValue));
      await lpTokenSend("approve", [getLpStakingAddress(), approveValueInWei], {
        from: this.account
      });

      await this.getLpTokenData();
    },
    async stake() {
      const stakeValueInWei = toWei(parseFloat(this.inputValue));
      await stakeLpSend("stake", [stakeValueInWei], {
        from: this.account
      });

      await this.getLpTokenData();
    }
  }
};
</script>

<style scoped></style>
