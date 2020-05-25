<template>
  <div ref="goods" class="GoodsList">
    <Goods v-for="(item,index) in goods" @load="lodyep(goods.length)" :goodsItem="item"></Goods>
  </div>
</template>

<script>
  import Goods from './Goods'
  export default {
    name: "GoodsList",
    data(){
      return{
        goods_scroll: null,
        count: 0
      }
    },
    props: {
      goods:{
        type: Array,
        default(){
         return []
        }
      }
    },
    components: {
      Goods
    },

    methods: {
      handle(){
        this.$bus.$emit('imgLoaded');
      },
      lodyep(l){
        if(++this.count === l){
          this.$emit('imlod');
        }
      }
    }

  }
</script>

<style scoped>
  .GoodsList{
    display: flex;
    flex-wrap: wrap;
  }
</style>