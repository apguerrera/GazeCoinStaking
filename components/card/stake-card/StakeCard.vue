<template>
  <div class="card-wrapper stake">
    <h4 class="card-wrapper__subtitle">
      {{ lpDailyRewards }} $GAZE / day

    </h4>

    <button @click="openModal()" class="button btn">
      zap eth
    </button>
    <h3 class="card-wrapper__subtitle"></h3>
    <stake-modal @closeModal="closeModal()" v-if="isModalOpen" />
    <h4 class="card-wrapper__subtitle">
      {{ lpTokenBalance }} LP
    </h4>

    <button
      @click="stakeLpToken()"
      class="button btn"
      :disabled="lpTokens == 0"
    >
      stake
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { makeBatchCall as callLpToken } from "@/helpers/contractFunctions/lpToken";
import {
  makeBatchCall as callLpStaking,
  sendTransaction as claimLpRewardSend,
  getAddress as getLpStakingAddress
} from "@/helpers/contractFunctions/lpStaking";
import { makeBatchCall as callRewardsContract } from "@/helpers/contractFunctions/rewardsContract";
import StakeModal from "~/components/modal/StakeModal";

export default {
  components: {
    StakeModal
  },
  name: "StakeCard",
  data() {
    return {
      isModalOpen: false,
      lpTokens: 0, 
      rewardsModel: {
        currentWeek:0,
        lpRewardRate: 0
      },
    };
  },
  computed: {
    ...mapGetters({
      account: "ethereum/account"
    }),
    lpTokenBalance() {
      return (this.lpTokens / 10 ** 18).toFixed(6);
    },
    lpDailyRewards() {
      return (this.rewardsModel.lpRewardRate * 60 * 24 / 10 ** 18).toFixed(0);
    }
  },
  async mounted() {
    await this.getLpTokenBalance();
    // const unixtime = (Date.now() / 1000).toFixed(0)
    const unixtime = 1618352872
    await this.getRewardsData(unixtime - (60), unixtime)

},
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async stakeLpToken() {
      const res = await claimLpRewardSend("stakeAll", [], {
        from: this.account
      });
      console.log(res);
    },
    async getLpTokenBalance() {
      const methods = [{ methodName: "balanceOf", args: [this.account] }];
      [this.lpTokens] = await callLpToken(methods);
    }, 
    async getRewardsData(fromTime, toTime) {
      const methods = [
        { methodName: 'getCurrentRewardWeek', args: [] },
        { methodName: 'LPRewards', args: [fromTime, toTime] }

      ];
      [
        this.rewardsModel.currentWeek,
        this.rewardsModel.lpRewardRate

      ] = await callRewardsContract(methods)
    },
  }
};
</script>

<style scoped></style>
