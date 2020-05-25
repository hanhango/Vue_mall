<template>
  <div class="detailNavBar">
    <NavBar class="navbar">
      <div slot="nav_left" class="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="center" slot="nav_center">
        <a v-for="(item,index) in navword" class="barWord" :class="currentIndex===index?'curr':''" @click="a_click(index)">
          {{item}}
        </a>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    data(){
      return{
        navword: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      a_click(index){
        this.currentIndex = index;
        this.$emit('nav_clik',index);
      },
      back(){
        /*this.$router.push('/Home')*/
        this.$router.back();
      },
    }
  }
</script>

<style scoped>
  .navbar{
    cursor: pointer;
  }
  .center{
    display: flex;
    justify-content: space-between;
  }
  .barWord{
    font-size: 14px;
  }
  .curr{
    color: red;
  }
  .left{
    position: relative;
    left: 14px;
    top: 5px;
  }
</style>