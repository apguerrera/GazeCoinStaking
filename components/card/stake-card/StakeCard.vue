<template>
  <div class="card-wrapper stake">
    <h2 class="card-wrapper__title">
      Current APY {{ 459.1 }}%
    </h2>

    <h4 class="card-wrapper__subtitle">
      1350 $GAZE / day
    </h4>

    <button @click="openModal()" class="button btn">
      zap eth
    </button>
    <h3 class="card-wrapper__subtitle">
    </h3>
    <stake-modal @closeModal="closeModal()" v-if="isModalOpen" />
    <button @click="stakeLpToken()" class="button btn">
      stake
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  makeBatchCall as callLpStaking,
  sendTransaction as claimLpRewardSend,
  getAddress as getLpStakingAddress
} from '@/helpers/contractFunctions/lpStaking'
import StakeModal from "~/components/modal/StakeModal";
export default {
  components: {
    StakeModal
  },
  name: 'StakeCard',
  data() {
    return {
      isModalOpen: false
    }
  },
  computed: {
    ...mapGetters({
      account: 'ethereum/account'
    })
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async stakeLpToken() {
      const res = await claimLpRewardSend('stakeAll', [], { from: this.account })
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>
