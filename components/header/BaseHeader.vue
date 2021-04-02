<template>
  <header class="header">
    <div class="header-logo">
      <img src="../../assets/images/logo.png" alt="logo">
    </div>
    <div class="header-coin">
      <img src="../../assets/images/coin.png" alt="coin">
    </div>
    <div class="header-connection">
      <button @click="!account ? connectAccount() : null"
              :class="{
                'wallet': !!account
              }"
              class="btn">
        {{ account ? shortenedAddress : 'Connect wallet' }}
      </button>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'BaseHeader',
  computed: {
    ...mapGetters({
      account: "ethereum/account"
    }),
    shortenedAddress() {
      return this.account.slice(0, 6).concat('...').concat(this.account.slice(-6));
    }
  },
  methods: {
    ...mapActions({
      enableAccount: "ethereum/connectAccount"
    }),
    async connectAccount() {

      const connected = await this.enableAccount();
      if (!connected) {
        this.$swal.fire({
          icon: "warning",
          title: `WALLET NOT DETECTED!`,
          html: `<p>Wallet is not detected in your browser, to continue please install Metamask extension for your browser</p> <a v-bind: href="https://metamask.io/" target="_blank">Get MetaMask</a>`,
          buttonsStyling: false,
          showCancelButton: false,
          confirmButtonClass: "btn btn-primary btn-fill",
          confirmButtonText: `Close`
        });
      }
    }
  }
}
</script>

<style>

</style>
