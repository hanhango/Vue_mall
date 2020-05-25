<template>
  <div id="recommend">
    <div class="son" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  #recommend{
    width: 100%;
    display: flex;
  }
  .son{
    flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 8px;
    border-bottom: 8px solid #eee;
  }
  .son img{
    margin-top: 5px;
    margin-bottom: 10px;
    display: inline-block;
    width: 65px;
    height: 65px;
  }
</style>