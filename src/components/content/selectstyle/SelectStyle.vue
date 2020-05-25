<template>
  <div id="SelectStyle">
    <div class="select">
      <div @click="handle(index)" :key="index" v-for="(item,index) in titles" class="Home_style">
        <span :class="currentIndex === index?'active':''">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SelectStyle",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      },
    },
    data(){
      return {
        isActive: false,
        currentIndex: 0
      }
    },
    methods: {
      handle(index){
        /*if(this.currentIndex !== index){
          this.isActive = false;
          this.currentIndex = index;
        }else {
          this.isActive = true;
        }*/
        this.currentIndex = index;
        this.$emit('get_pns',this.currentIndex);
      }
    },

  }
</script>

<style scoped>
  #SelectStyle{
    z-index: 9;
  }
  .select{
    background-color: #fff;
    line-height: 44px;
    display: flex;
    text-align: center;
  }
  .select div{
    flex: 1;
    font-size: 20px;
  }
  .active{
    padding: 5px;
    color: var(--color-high-text);
    border-bottom: 2px solid hotpink;
  }
</style>