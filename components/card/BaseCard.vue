<template>
  <div class="card">
    <div class="card-header">
      <h2 class="card-header__title">
        {{ card.title }}
      </h2>
      <p class="card-header__subtitle">
        {{ card.subtitle }}
      </p>
      <p class="card-header__text">
        {{ card.text }}
      </p>
    </div>

    <reward-card :card="card" />
    <stake-card :card="card" />
    <claim-card :card="card" />
  </div>
</template>

<script>
import ClaimCard from "~/components/card/claim-card/ClaimCard";
import StakeCard from "~/components/card/stake-card/StakeCard";
import RewardCard from "~/components/card/reward-card/RewardCard";
export default {
  components: {
    ClaimCard,
    StakeCard,
    RewardCard
  },
  name: "BaseCard",
  props: {
    card: {
      type: Object,
      required: false
    }
  }
};
</script>

<style></style>
