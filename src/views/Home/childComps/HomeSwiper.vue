<template>
  <div id="HomeSwiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoaded">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    data(){
      return{

      }
    },
    props:{
      banners: {
        type: Array,
      }
    },

    components: {
      Swiper,
      SwiperItem
    },

    methods: {
      imageLoaded(){
        this.$emit('swiperImageLoad');
      }
    }
  }
</script>

<style scoped>

</style>