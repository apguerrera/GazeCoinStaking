<template>
  <div class="card-wrapper claim">

    <h5 class="card-wrapper__uppertitle">
      Balance
    </h5>

    <h2 class="card-wrapper__title">
      {{ '0.000000' }} GAZE
    </h2>

    <button @click="claimLpRewards()" class="button btn">
      claim
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  sendTransaction as lpStakingTransactions
} from '@/helpers/contractFunctions/lpStaking'
export default {
  name: 'ClaimCard',
  computed: {
    ...mapGetters({
      account: 'ethereum/account'
    })
  },
  methods: {
    async claimLpRewards() {
      const claimResult = await lpStakingTransactions('claimReward', [this.account], { from: this.account })
      console.log(claimResult, 'claimResult');
    }
  }
}
</script>

<style scoped>

</style>
