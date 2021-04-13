<template>
  <div class="card-wrapper reward">
    <h2 class="card-wrapper__title">
      {{ ((apyModel.lpDaily * 365) / 10 ** 18).toFixed(2) }}% APY
    </h2>
  </div>
</template>

<script>
import { makeBatchCall as callRewardsContract } from "@/helpers/contractFunctions/rewardsContract";

export default {
  name: "RewardCard",
  data() {
    return {
      apyModel: {
        lpDaily: 0
      }
    };
  },
  async mounted() {
    await this.getAPYData();
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
