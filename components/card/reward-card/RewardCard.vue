<template>
  <div class="card-wrapper reward">
    <h2 class="card-wrapper__title">
      {{ ((apyModel.lpDaily ) / 10 ** 18).toFixed(2) }}% APY
    </h2>
  </div>
</template>

<script>
import { makeBatchCall as callRewardsContract } from "@/helpers/contractFunctions/rewardsContract";

export default {
  name: "RewardCard",
  props: {
    card: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      apyModel: {
        lpDaily: 0
      }
    };
  },
  async mounted() {
    if (this.card.id != 2) {
      await this.getAPYData();
    }
  },
  methods: {
    async getAPYData() {
      const methods = [{ methodName: "getLpDailyAPY" }];
      [this.apyModel.lpDaily] = await callRewardsContract(methods);
    }
  }
};
</script>

<style scoped></style>
