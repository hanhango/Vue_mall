<template>
  <div class="nav-bar">
    <div class="nav_left">
      <slot name="nav_left"></slot>
    </div>

    <div class="nav_mid">
      <slot name="nav_center"></slot>
    </div>

    <div class="nav_right">
      <slot name="nav_right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    z-index: 999;
    /*position: fixed;
    left: 0;
    right: 0;
    top: 0;*/
    line-height: 44px;
    font-size: 20px;
    text-align: center;
    box-shadow: 0px 1px 5px rgba(100,100,100,.4);
  }

  .nav_left{
    width: 60px;
    /*background-color: blue;*/
  }
  .nav_mid{
    flex: 1;
  }

  .nav_right{
    width: 60px;
    /*background-color: blue;*/
  }
</style>