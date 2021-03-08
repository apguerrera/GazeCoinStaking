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
    <button class="button btn">
      stake
    </button>
  </div>
</template>

<script>
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
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
</script>

<style scoped>

</style>
