<template>
    <tab-bar>
      <TabBarItem path="/Home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </TabBarItem>

      <!--<TabBarItem path="/Category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>-->

      <TabBarItem path="/Shopcart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>

      <TabBarItem path="/User">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>

    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    data(){
      return{
        is_display: Boolean
      }
    },


    components: {
      TabBarItem,
      TabBar
    },

    mounted() {
      this.$bus.$on('detailIn',() =>{
        this.is_display = true;
      });
      this.$bus.$on('detailOut',() => {
        this.is_display = false;
      });
    }
  }
</script>

<style scoped>

</style>