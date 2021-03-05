<template>
  <header class="header">
    <div class="header-logo">
      <img src="../../assets/images/logo.png" alt="logo">
    </div>
    <div class="header-coin">
      <img src="../../assets/images/coin.png" alt="coin">
    </div>
    <div class="header-connection">
      <button>Connect wallet</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  width: 100%;
  padding: 17px 0 21px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
