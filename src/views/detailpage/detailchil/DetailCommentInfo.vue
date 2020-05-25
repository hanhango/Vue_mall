<template>
  <div>
    <div v-if="Object.keys(commentInfo).length !== 0">
      <div class="comment_head">
        <span>用户评价</span>
        <div>
          <i>更多</i>
          <svg t="1588079710777" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1727" width="24" height="24"><path d="M525.8 240.1c-14.3 8.3-19.2 26.7-11 41l131.5 227.7-131.5 227.7c-8.2 14.3-3.3 32.7 11 41 14.3 8.3 32.7 3.3 41-11l140-242.5c2.7-4.7 4-9.8 4-14.9v-0.4-0.4c0-5.1-1.3-10.2-4-14.9l-140-242.5c-8.3-14.1-26.7-19.1-41-10.8z" fill="#B3B3B3" p-id="1728"></path><path d="M369.2 766.5l140-242.5c2.7-4.7 4-9.8 4-14.9v-0.4-0.4c0-5.1-1.3-10.2-4-14.9l-140-242.5c-8.2-14.3-26.7-19.2-41-11-14.3 8.3-19.2 26.7-11 41l131.5 227.7-131.5 227.9c-8.2 14.3-3.3 32.7 11 41 14.3 8.3 32.7 3.3 41-11z" fill="#B3B3B3" p-id="1729"></path></svg>
        </div>
      </div>

      <div class="comment_user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>

      <div class="comment_com">
        <p>{{commentInfo.content}}</p>

        <div class="comment_info">
          <span class="data">{{showDate(commentInfo.created)}}</span>
          <span>{{commentInfo.style}}</span>
        </div>

      </div>

      <div class="image">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type: Object,
        default() {
          return {};
        }
      }
    },

    methods: {
      showDate(data){
        let time = new Date(data * 1000);
        var ans = '';
        ans += time.getFullYear().toString() + '-' + time.getMonth().toString() + '-' + time.getDay().toString();
        return ans;
      }
    }
  }
</script>

<style scoped>
  .comment_head{
    margin: 8px;
    border-bottom: 2px solid #F2F5F8;
    display: flex;
    justify-content: space-between;
    font-size: 19px;
  }
  .comment_head i{
    position: relative;
    top: -7px;
    left: -4px;
  }

  .comment_user{
    height: 69px;
    margin: 8px 8px -22px;
  }
  .comment_user img{
    width: 42px;
    height: 42px;
  }
  .comment_user span{
    position: relative;
    top: -14px;
  }


  .comment_com{
    margin: 0px 8px 0px;
  }

  .data{
    margin: 25px 28px 23px 0px;
  }
  p{
    margin-bottom: 5px;
  }
  .comment_info{
    font-size: 13px;
    color: #ff5777;
    margin-bottom: 24px;
  }

  .image{
    display: flex;
    border-bottom: 6px solid #F2F5F8;
  }
  .image img{
    width: 65px;
    height: 65px;
    margin: 8px 3px 24px 8px;
  }
</style>