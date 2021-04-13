<template>
  <div class="card-wrapper claim">

    <h5 class="card-wrapper__uppertitle">
      Balance
    </h5>

    <h2 class="card-wrapper__title" :class="{'text-grey': lpRewards == 0}"> 
      {{ lpRewards}} GAZE
    </h2>

    <button @click="claimLpRewards()" 
            class="button btn"
    >
      CLAIM
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  makeBatchCall as callLpStaking,
  sendTransaction as lpStakingTransactions
} from '@/helpers/contractFunctions/lpStaking'
export default {
  name: 'ClaimCard',
  data () {
    return {
      resArray: Array,
      accountBalance: 0,
      tokenModel: {
        name: null,
        symbol: null,
        totalSupply: null
      },
      lpStakingModel: {
        rewards: null,
        balance: null,
        stakedEthTotal: null,
        lastUpdateTime: null
      },
      claimLpLoading: false
    }
  },
  computed: {
    ...mapGetters({
      account: 'ethereum/account'
    }), 
    lpRewards () {
      return (this.lpStakingModel.rewards / 10 ** 18).toFixed(6)
    },
  },
  methods: {
    async claimLpRewards() {
      const claimResult = await lpStakingTransactions('claimReward', [this.account], { from: this.account })
      console.log(claimResult, 'claimResult');
    },
    async mounted () {
      this.resArray = this.getter
      await this.getLpData()

    },
    async getLpData () {
      const methods = [
        { methodName: 'stakedEthTotal' },
        { methodName: 'getStakedBalance', args: [this.account] },
        { methodName: 'unclaimedRewards', args: [this.account] },
        { methodName: 'lastUpdateTime' }
      ];
      [
        this.lpStakingModel.stakedEthTotal,
        this.lpStakingModel.balance,
        this.lpStakingModel.rewards,
        this.lpStakingModel.lastUpdateTime
      ] = await callLpStaking(methods)
    },
  }
}
</script>

<style scoped>

</style>
