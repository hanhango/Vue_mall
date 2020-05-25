<template>
  <div class="detail-swiper">
    <swiper class="itemImg">
      <swiper-item  v-for="item in topImg">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    data(){
      return{

      }
    },
    props:{
      topImg: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  img{
    display: block;
    z-index: 1;
  }
  .detail-swiper{
    margin-top: 44px;
  }
  .itemImg{
    height: 300px;
    overflow: hidden;
  }
</style>