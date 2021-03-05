<template>
  <div class="card-wrapper stake">
    <h2 class="card-wrapper__title">
      Current APY {{ 0.0 }}%
    </h2>

    <h4 class="card-wrapper__subtitle">
      Dream credits / day
    </h4>

    <button @click="openModal()" class="button btn">
      stake
    </button>
    <stake-modal @closeModal="closeModal()" v-if="isModalOpen" />
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
