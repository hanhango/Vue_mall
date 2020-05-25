<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<style>
  @import "assets/css/base.css";

</style>

<script>
  import MainTabBar from "components/content/MainTabBar";
  import { Button } from 'vant';
  export default {
    name: 'App',
    components: {
      MainTabBar,
      Button
    },
  }
</script>