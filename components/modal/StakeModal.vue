<template>
  <div @click="closeModal()" class="overlay">
    <div @click="stopPropogation" class="modal">
      <h3 class="modal__title">
        Zap eth
      </h3>
      <div class="modal-body">
        <input min=0
               step="0.1"
               v-model="inputValue"
               type="number">
        <div class="arrows">
          <span @click.stop="increase()" class="top-arrow">
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 -3.93402e-07L9.5 5L0.5 5L5 -3.93402e-07Z" fill="#D4D4D4"/>
            </svg>
          </span>
          <span @click.stop="decrease()" class="bottom-arrow">
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5L0.5 0L9.5 5.04736e-07L5 5Z" fill="#D4D4D4"/>
            </svg>
          </span>
        </div>

        <button @click="zapEth()" class="modal-body__button btn">
          Zap eth
        </button>
      </div>
      <div @click.stop="closeModal()" class="modal-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="19.4247" y="5.98965" width="19" height="2" transform="rotate(135 19.4247 5.98965)" fill="white"/>
          <rect x="18.0105" y="19.4247" width="19" height="2" transform="rotate(-135 18.0105 19.4247)" fill="white"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  makeBatchCall as callLpToken,
} from '@/helpers/contractFunctions/lpToken'
import {
  getAddress as getLpStakingAddress,
  sendTransaction as claimLpRewardSend,
} from '@/helpers/contractFunctions/lpStaking'
import { numberToHex, toWei } from '@/helpers/contractFunctions/base'

export default {
  name: 'StakeModal',
  data() {
    return {
      inputValue: 0.1,
      lpTokens: 0,
      lpBalance: 0,
      lpTokenAllowance: 0,
    }
  },
  computed: {
    ...mapGetters({
      account: 'ethereum/account'
    })
  },
  methods: {
    decrease() {
      if(+this.inputValue > 0) {
        this.inputValue = parseFloat(this.inputValue) - 1;
      }
    },
    increase() {
      this.inputValue = parseFloat(this.inputValue) + 1;
    },
    closeModal() {
      this.$emit('closeModal');
    },
    stopPropogation: function (event) {
      event.stopImmediatePropagation();
    },
    async zapEth() {
      const zapEthValueInWei = toWei(this.inputValue)
      // const receipt = await claimLpRewardSend('addLiquidityETHOnly', [this.account], { from: this.account, value: numberToHex(`${zapEthValueInWei}`) })
      const receipt = await claimLpRewardSend('zapEth', [], { from: this.account, value: numberToHex(`${zapEthValueInWei}`) })
      console.log('receipt', receipt)

      if (receipt) {
        await this.getLpTokenData()
        this.showZapEthPopup = false
      }
    },
    async getLpTokenData () {
      const methods = [
        { methodName: 'balanceOf', args: [this.account] },
        { methodName: 'allowance', args: [this.account, getLpStakingAddress()] }
      ];
      [
        this.lpTokens,
        this.lpTokenAllowance
      ] = await callLpToken(methods)
      console.log('lpTokens', this.lpTokens)
      console.log('lpTokensAllowance', this.lpTokenAllowance)
    },
  }
}
</script>

<style scoped>

</style>
