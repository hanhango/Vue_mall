<template>
  <div class="backTop">
    <a href="#top">
      <img src="~assets/img/common/top.png" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style scoped>
  .backTop{
    position: fixed;
    right: 5px;
    bottom: 50px;
    z-index: 999;
  }
  img{
    width: 42px;
    height: 42px;
  }
</style>