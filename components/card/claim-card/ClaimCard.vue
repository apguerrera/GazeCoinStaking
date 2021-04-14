<template>
  <div class="card-wrapper claim">
    <h4 class="card-wrapper__subtitle" :class="{ 'text-grey': lpRewards == 0 }">
      {{ lpRewards }} GAZE
    </h4>
    <button
      @click="claimLpRewards()"
      class="button btn"
      :disabled="lpRewards == 0"
    >
      CLAIM
    </button>

    <h3 class="card-wrapper__subtitle"></h3>

    <h4 class="card-wrapper__subtitle" :class="{ 'text-grey': lpBalance == 0 }">
      {{ lpBalance }} LP
    </h4>
    <unstake-modal @closeModal="closeModal()" v-if="isModalOpen" />
    <button @click="openModal()" class="button btn" :disabled="lpBalance == 0">
      UNSTAKE
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  makeBatchCall as callLpStaking,
  sendTransaction as lpStakingTransactions
} from "@/helpers/contractFunctions/lpStaking";
import UnstakeModal from "~/components/modal/UnstakeModal";

export default {
  components: {
    UnstakeModal
  },
  name: "ClaimCard",
  props: {
    card: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      isModalOpen: false,
      accountBalance: 0,
      tokenModel: {
        name: null,
        symbol: null,
        totalSupply: null
      },
      lpStakingModel: {
        rewards: 0,
        balance: 0,
        stakedEthTotal: null,
        lastUpdateTime: null
      },
      claimLpLoading: false
    };
  },
  computed: {
    ...mapGetters({
      account: "ethereum/account"
    }),
    lpRewards() {
      return (this.lpStakingModel.rewards / 10 ** 18).toFixed(6);
    },
    lpBalance() {
      return (this.lpStakingModel.balance / 10 ** 18).toFixed(6);
    }
  },
  async mounted() {
    if (this.card.id != 2) {
      await this.getLpData();
      setInterval(async () => {
        await this.getLpData();
      }, 3000);
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async claimLpRewards() {
      const claimResult = await lpStakingTransactions(
        "claimReward",
        [this.account],
        { from: this.account }
      );
    },
    async getLpData() {
      const methods = [
        // { methodName: "stakedEthTotal" },
        { methodName: "getStakedBalance", args: [this.account] },
        { methodName: "unclaimedRewards", args: [this.account] }
        // { methodName: "lastUpdateTime" }
      ];
      [
        // this.lpStakingModel.stakedEthTotal,
        this.lpStakingModel.balance,
        this.lpStakingModel.rewards
        // this.lpStakingModel.lastUpdateTime
      ] = await callLpStaking(methods);
    }
  }
};
</script>

<style scoped></style>
