<template>
  <div class="shopcart">
    <!--<ul>
    <li v-for="(item,index) in $store.state.carlist"  :key="index">
      {{item.title}} {{item.price}}
    </li>
  </ul>-->
    <div v-for="(item,index) in $store.state.carlist" :key="index" class="shoplist">
      <div class="content" @click="handle(index)">
        <div v-if="$store.state.carlist[index].isCheck"  class="check">
          <svg t="1588769861416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14672" width="22" height="22"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#e54d42" p-id="14673" data-spm-anchor-id="a313x.7781069.0.i27" class="selected"></path><path d="M429.933714 618.788571l311.222857-323.437714a73.142857 73.142857 0 1 1 105.398858 101.449143L485.156571 772.388571a73.142857 73.142857 0 0 1-102.912 2.56L169.252571 574.171429a73.142857 73.142857 0 1 1 100.352-106.422858L429.933714 618.788571z" fill="#F9F9F9" p-id="14674"></path></svg>
        </div>
        <div v-else class="check">
          <svg t="1588769208082" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5143" width="24" height="24"><path d="M693.696 291.2 384 600.896 266.304 483.2c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248l140.288 140.288c6.272 6.272 14.464 9.408 22.656 9.408s16.384-3.136 22.656-9.344l332.288-332.288c12.48-12.48 12.48-32.768 0-45.248S706.176 278.72 693.696 291.2z" p-id="5144"></path><path d="M480 0C214.912 0 0 214.912 0 480s214.912 480 480 480 480-214.912 480-480S745.088 0 480 0zM480 896c-229.76 0-416-186.24-416-416S250.24 64 480 64s416 186.24 416 416S709.76 896 480 896z" p-id="5145"></path></svg>
        </div>
        <img :src="item.image" alt="">

        <div class="desc">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
          <!--item.price * item.count-->
          <span>￥{{showPrice(index)}}</span>
          <span>x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopCartList",
    computed: {
      showPrice(){
        return (index) => {
          var a = this.$store.state.carlist[index];
          var price = (a.price * a.count).toFixed(2);
          return price;
        }
      }
    },


    methods:{
      handle(index){
        this.$store.state.carlist[index].isCheck = !this.$store.state.carlist[index].isCheck;
      }
    }
  }
</script>

<style scoped>
  .shoplist{
    width: 100%;
    height: 120px;
    background-color: white;
    border-bottom: 1px solid #666666;
    margin-bottom: 20px;
  }
  .content{
    height: 100%;
    position: relative;
  }
  img{
    width: 25%;
    height: 80%;
    margin: 13px 13px 13px 24px;
    border-radius: 13px;
  }
  .desc{
    height: 20px;
  }
  .desc p,
  .desc span,
  .desc input{
    position: absolute;
    top: 0;
    margin-top: 13px;
    left: 130px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc p:nth-of-type(1){
    font-size: 19px;
    color: #666666;
    width: 68%;
  }
  .desc p:nth-of-type(2){
    top: 41px;
    width: 60%;
  }
  .desc span:nth-of-type(1){
    color: red;
    font-size: 20px;
    top: 71px;
  }
  .desc span:nth-of-type(2){
    top: 71px;
    left: 326px;
    font-size: 20px;
  }
  input{
    position: absolute;
    display: inline-block;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 20px;
  }
  .check{
    display: inline;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
  }
</style>