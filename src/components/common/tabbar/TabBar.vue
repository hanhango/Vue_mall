<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar{
    display: flex;
    background-color: #f6f6f6;
    height: 49px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0px -1px 5px rgba(100,100,100,0.2);
  }
</style>