<template>
  <div class="card-wrapper stake">
    <h4 class="card-wrapper__subtitle">Total Staked in Pool: {{ lpStakedEth }} ETH</h4>
    <h4 class="card-wrapper__subtitle">Pool Rewards: {{ lpDailyRewards }} $GAZE / day</h4>

    <button @click="openZapModal()" class="button btn">
      zap eth
    </button>
    <h3 class="card-wrapper__subtitle" />
    <zap-modal @closeModal="closeZapModal()" v-if="isZapModalOpen" />

     <h4 class="card-wrapper__subtitle"> - OR - </h4>
    <a href="https://app.sushi.com/add/ETH/0x4AC00f287f36A6Aad655281fE1cA6798C9cb727b" target="_blank">
    <button
      class="button btn"
    >
      Add Liquidity
    </button>    </a>

      <h3 class="card-wrapper__subtitle" />

    <h4 class="card-wrapper__subtitle">{{ lpTokenBalance }} SLP</h4>
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
        lpStakedEth: 0,
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
    },
    lpStakedEth() {
      return ((this.rewardsModel.lpStakedEth ) / 10 ** 18).toFixed(2);
    }
  },
  async mounted() {
    if (this.card.id != 2) {
      await this.getLpTokenData();
      await this.getRewardsData();
      setInterval(async () => {
        await this.getLpTokenData();
      }, 3000);
      // setInterval(async () => {
      //   await this.getRewardsData();
      // }, 10000);
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
        { methodName: "getLpStakedEthTotal", args: [] },
        { methodName: "LPRewards", args: [fromTime, toTime] }
      ];
      [
        this.rewardsModel.currentWeek,
        this.rewardsModel.lpStakedEth,
        this.rewardsModel.lpRewardRate
      ] = await callRewardsContract(methods);
    }
  }

  
};
</script>

<style scoped></style>
