<template>
  <div class="card-wrapper stake">
    <h4 class="card-wrapper__subtitle">{{ lpDailyRewards }} $GAZE / day</h4>
    <button @click="openZapModal()" class="button btn">
      zap eth
    </button>
    <h3 class="card-wrapper__subtitle" />
    <zap-modal @closeModal="closeZapModal()" v-if="isZapModalOpen" />

    <h4 class="card-wrapper__subtitle">{{ lpTokenBalance }} LP</h4>
    <button
      @click="openStakeModal()"
      class="button btn"
      :disabled="lpTokenModel.tokenBalance == 0"
    >
      stake
    </button>
    <h3 class="card-wrapper__subtitle" />
    <stake-modal @closeModal="closeStakeModal()" v-if="isStakeModalOpen" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  makeBatchCall as callLpToken,
  getAddress as getlpTokenAddress
} from "@/helpers/contractFunctions/lpToken";
import { makeBatchCall as callRewardsContract } from "@/helpers/contractFunctions/rewardsContract";
import ZapModal from "~/components/modal/ZapModal";
import StakeModal from "~/components/modal/StakeModal";

export default {
  components: {
    ZapModal,
    StakeModal
  },
  name: "StakeCard",
  props: {
    card: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      isZapModalOpen: false,
      isStakeModalOpen: false,
      lpTokenModel: {
        tokenBalance: 0
      },
      rewardsModel: {
        currentWeek: 0,
        lpRewardRate: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      account: "ethereum/account"
    }),
    lpTokenBalance() {
      return (this.lpTokenModel.tokenBalance / 10 ** 18).toFixed(6);
    },
    lpDailyRewards() {
      return ((this.rewardsModel.lpRewardRate * 60 * 24) / 10 ** 18).toFixed(0);
    }
  },
  async mounted() {
    if (this.card.id != 2) {
      await this.getLpTokenData();
      await this.getRewardsData();
      setInterval(async () => {
        await this.getLpTokenData();
        await this.getRewardsData();
      }, 3000);
    }
  },
  methods: {
    openZapModal() {
      this.isZapModalOpen = true;
    },
    closeZapModal() {
      this.isZapModalOpen = false;
    },
    openStakeModal() {
      this.isStakeModalOpen = true;
    },
    closeStakeModal() {
      this.isStakeModalOpen = false;
    },
    async getLpTokenData() {
      const methods = [{ methodName: "balanceOf", args: [this.account] }];
      [this.lpTokenModel.tokenBalance] = await callLpToken(methods);
    },
    async getRewardsData() {
      const toTime = (Date.now() / 1000).toFixed(0);
      const fromTime = toTime - 60;

      const methods = [
        { methodName: "getCurrentRewardWeek", args: [] },
        { methodName: "LPRewards", args: [fromTime, toTime] }
      ];
      [
        this.rewardsModel.currentWeek,
        this.rewardsModel.lpRewardRate
      ] = await callRewardsContract(methods);
    }
  }
};
</script>

<style scoped></style>
