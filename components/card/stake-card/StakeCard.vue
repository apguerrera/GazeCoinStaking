<template>
  <div class="card-wrapper stake">
    <h4 class="card-wrapper__subtitle">
      1350 $GAZE / day
    </h4>

    <button @click="openModal()" class="button btn">
      zap eth
    </button>
    <h3 class="card-wrapper__subtitle"></h3>
    <stake-modal @closeModal="closeModal()" v-if="isModalOpen" />
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
      lpTokens: 0
    };
  },
  computed: {
    ...mapGetters({
      account: "ethereum/account"
    })
  },
  async mounted() {
    await this.getLpTokenBalance();
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
    }
  }
};
</script>

<style scoped></style>
