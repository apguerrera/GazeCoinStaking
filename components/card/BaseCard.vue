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

    <stake-card />
    <claim-card />
  </div>
</template>

<script>
import ClaimCard from "~/components/card/claim-card/ClaimCard";
import StakeCard from "~/components/card/stake-card/StakeCard";
export default {
  components: {
    ClaimCard,
    StakeCard
  },
  name: 'BaseCard',
  props: {
    card: {
      type: Object,
      required: false
    }
  }
}
</script>

<style>

</style>
