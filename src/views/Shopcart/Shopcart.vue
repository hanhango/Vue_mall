<template>
  <div class="ShopCart">
    <NavBar class="nav_mid">
      <div class="nav_mid" slot="nav_center">购物车({{shop_carLength}})</div>
    </NavBar>
    <Scroll ref="shopscroll" class="content">
      <ShopCartList></ShopCartList>
      <div class="bgc" v-if="$store.state.carlist.length === 0">
        <img src="@/assets/img/cart/timg.png" alt="">
        <span>购物车空空如也~快去采购您喜欢的商品吧~</span>
      </div>
    </Scroll>
    <ShopTabBar></ShopTabBar>
    <!--<TabBar class="tabbar">
      <TabBarItem></TabBarItem>
    </TabBar>-->
  </div>

</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import ShopCartList from "./childComps/ShopCartList";
  import ShopTabBar from "./childComps/ShopTabBar";
  import TabBar from "../../components/common/tabbar/TabBar";
  import TabBarItem from "../../components/common/tabbar/TabBarItem";
  export default {
    name: "Shopcart",
    components: {
      TabBarItem,
      TabBar,
      ShopTabBar,
      ShopCartList,
      Scroll,
      NavBar
    },
    computed: {
      shop_carLength(){
        return this.$store.state.carlist.length;
      }
    },
    activated() {
      this.$refs.shopscroll.refresh();
    }
  }
</script>

<style scoped>
  .nav_mid{
    background-color: #e54d42;
    color: white;
  }
  .content{
    height: calc(100% - 44px - 49px - 44px);
    overflow: hidden;
  }
  .ShopCart{
    height: 100vh;
    overflow: hidden;
  }
  .bgc{
    width: 100%;
    height: calc(100vh - 42px);

    text-align: center;
  }
  .bgc span{
    position: relative;
    bottom: 118px;
    font-size: 33px;
  }
  img{
    width: 100%;
    height: 100%;
  }
  span{
    position: relative;
    top: -190px;
  }
</style>