<template>
  <div class="shopbar">
      <div class="settle">
        <div class="select" @click="allSelect">
          <div v-if="isCheck" class="check">
            <svg t="1588769861416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14672" width="22" height="22"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#e54d42" p-id="14673" data-spm-anchor-id="a313x.7781069.0.i27" class="selected"></path><path d="M429.933714 618.788571l311.222857-323.437714a73.142857 73.142857 0 1 1 105.398858 101.449143L485.156571 772.388571a73.142857 73.142857 0 0 1-102.912 2.56L169.252571 574.171429a73.142857 73.142857 0 1 1 100.352-106.422858L429.933714 618.788571z" fill="#F9F9F9" p-id="14674"></path></svg>
          </div>
          <div v-else class="check">
            <svg t="1588769208082" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5143" width="24" height="24"><path d="M693.696 291.2 384 600.896 266.304 483.2c-12.48-12.48-32.768-12.48-45.248 0s-12.48 32.768 0 45.248l140.288 140.288c6.272 6.272 14.464 9.408 22.656 9.408s16.384-3.136 22.656-9.344l332.288-332.288c12.48-12.48 12.48-32.768 0-45.248S706.176 278.72 693.696 291.2z" p-id="5144"></path><path d="M480 0C214.912 0 0 214.912 0 480s214.912 480 480 480 480-214.912 480-480S745.088 0 480 0zM480 896c-229.76 0-416-186.24-416-416S250.24 64 480 64s416 186.24 416 416S709.76 896 480 896z" p-id="5145"></path></svg>
          </div>
          <p>全选</p>
        </div>

        <div class="total">
          <span>合计￥{{showPrice}}</span>
          <div @click="bill">去计算</div>
        </div>

      </div>
  </div>
</template>

<script>
  import TabBar from "../../../components/common/tabbar/TabBar";
  import TabBarItem from "../../../components/common/tabbar/TabBarItem";
  export default {
    name: "ShopTabBar",
    data(){
      return{
        isCheck: false,
        shopprice: 0
      }
    },
    props: {
      isAll:{
        type: Boolean,
        default(){
          return false;
        }
      }
    },
    components: {
      TabBarItem,
      TabBar
    },

    methods: {
      allSelect(){
        this.isCheck = !this.isCheck;
          for(let item of this.$store.state.carlist){
            if(this.isCheck){
              item.isCheck = true;
            }else {
              item.isCheck = false;
            }
          }

      },

      bill(){
        let str = '您一共需要支付' + this.shopprice.toFixed(2).toString() + '元';
        this.$toast.show(str);
      }
    },

    computed:{
      showPrice(){
        this.shopprice = 0;
        for(let item of this.$store.state.carlist){
          if(item.isCheck){
            this.shopprice += item.price * item.count;
          }
        }
        return this.shopprice.toFixed(2);
      }
    },

    updated() {
      let flag = false;
      for(let item of this.$store.state.carlist) {
          if(!item.isCheck){
            flag = true;
          }
      }

      if(flag){
        this.isCheck = false;
      }else{
        this.isCheck = true;
      }

    }
  }
</script>

<style scoped>
  .tabbar{
    position: fixed;
    background-color: #7f7f7f;
    height: 44px;
    bottom: 49px;
  }
  .check{
    display: inline;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    width: 20px;
  }
  .settle{
    position: fixed;
    left: 0;
    right: 0;
    background-color: #7f7f7f;
    height: 44px;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .total div{
    font-family: "Microsoft YaHei";
    color: white;
    font-size: 20px;
    position: relative;
    text-align: center;
    line-height: 44px;
    width: 148px;
    height: 100%;
    background-color: #e54d42;
  }
  .total span{
    position: absolute;
    left: 86px;
    top: 9px;
    font-size: 20px;
  }
  .select p{
    position: relative;
    top: 50%;
    transform: translateY(-58%);
    margin-left: 3px;
    font-size: 20px;
    left: 28px;
  }
</style>