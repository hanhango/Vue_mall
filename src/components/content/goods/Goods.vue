<template>
  <div class="Goods" @click="goods_click">
    <img :src="showDate" alt="" @load="handle">
    <div class="GoodsDetail">
      <p>{{goodsItem.title}}</p>
      <span>{{goodsItem.price}}</span>
      <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {

    name: "Goods",
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      handle(){
        this.$bus.$emit('imgLoaded');
      },
      goods_click(){
        this.$router.push('/Detail/' + this.goodsItem.iid);
      }
    },

    computed:{
      showDate(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
  .Goods{
    width: 45%;
    height: 265px;
    margin: 5px 7px 37px;
  }
  .GoodsDetail{
    white-space: nowrap;
    text-align: center;
  }
  .Goods img{
    width: 100%;
    border-radius: 13px;
    height: 265px;
  }
  .GoodsDetail span:nth-of-type(1){
    color: #ff5777;
    position: relative;
    left: -3px;
    margin-right: 18px;
  }
  .GoodsDetail span:nth-of-type(1)::before{
    content: '￥';
  }
  .GoodsDetail span:nth-of-type(2){
    position: relative;
  }
  .GoodsDetail span:nth-of-type(2)::before{
    content: '';
    position: absolute;
    left: -13px;
    top: 1px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    width: 14px;
    height: 14px;
  }
  p{
    overflow: hidden;
    text-overflow:ellipsis
  }
</style>