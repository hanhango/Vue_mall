<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

  <!--<div class="tab-bar-item">
    <img src="./assets/img/tabbar/category.svg" alt="">
    <div>分类</div>
  </div>

  <div class="tab-bar-item">
    <img src="./assets/img/tabbar/shopcart.svg" alt="">
    <div>购物车</div>
  </div>

  <div class="tab-bar-item">
    <img src="./assets/img/tabbar/profile.svg" alt="">
    <div>我的</div>
  </div>-->
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return{
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },

      activeStyle(){
        return this.isActive?{color: this.activeColor}:{}
      }
    },
    methods: {
      itemclick(){
        console.log(this.$router)
        if(this.$route.path !== this.path){
          this.$router.replace(this.path);
        }
      }
    },
    activated() {
      console.log('huoyue');
      this.isActive = true;

    },
    deactivated() {
      console.log('huoyue');
      this.isActive = false
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    font-size: 14px;
    margin: 5px;
    text-align: center;
  }

  .tab-bar-item img{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }

</style>