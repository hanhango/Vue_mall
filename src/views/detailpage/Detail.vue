<template>
  <div class="detail">
    <DetailNavBar @nav_clik="nav_clik($event)" ref="detail_nav" class="navbar1"></DetailNavBar>
    <scroll :probeType="3" @backTopShow="get_position" ref="pst1" class="content">
      <DetailSwiper :top-img="topImg"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo ref="param" @imageLoad="imageLoad" :detail-info="goods_Info"></DetailGoodsInfo>
      <DetailParamInfo  :param-info="goods_measure"></DetailParamInfo>
      <DetailCommentInfo ref="comment" :comment-info="goods_comment"></DetailCommentInfo>
      <GoodsList ref="recommend" :goods="goods_recommend"></GoodsList>
    </scroll>

    <back-top @click.native="backto"></back-top>
    <DetailTabBar @addToCar="addToCar"></DetailTabBar>
  </div>
</template>

<script>

  import DetailNavBar from './detailchil/DetailNavBar'
  import DetailSwiper from './detailchil/DetailSwiper'
  import DetailBaseInfo from './detailchil/DetailBaseInfo'
  import DetailShopInfo from './detailchil/DetailShopInfo'
  import DetailGoodsInfo from './detailchil/DetailGoodsInfo'
  import DetailParamInfo from './detailchil/DetailParamInfo'
  import DetailCommentInfo from './detailchil/DetailCommentInfo'
  import GoodsList from 'components/content/goods/GoodsList'


  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js'
  import BackTop from "../../components/content/backtop/backTop";
  import DetailTabBar from "./detailchil/DetailTabBar";
  export default {
    name: "Detail",
    data(){
      return{
        iid: null,
        topImg: [],
        goods: {},
        shop: {},
        goods_Info: {},
        goods_measure: {},
        goods_comment:{},
        goods_recommend:[],
        navgation:[],
        getHome:{}
      }
    },


    components: {
      DetailTabBar,
      BackTop,
      DetailCommentInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      GoodsList,
      Scroll
    },


    methods:{

      //防抖动
      debounce(func,delay){
        let timer = null;
        return function (...args) {
          if(timer) clearTimeout(timer);

          timer = setTimeout(() => {
            func.apply(this,args);
          },delay)
        }
      },

      imageLoad(){
        this.debounce(this.$refs.pst1.refresh,300);
        this.getHome();
      },

      nav_clik(index){
        /*console.log(this.navgation[index]);*/
        this.$refs.pst1.scrollTo(0,-(this.navgation[index] - 33));
      },

      backto(){
        this.$refs.pst1.scrollTo(0,0,400);
      },

      get_position(position){
        /*console.log(position.y);*/
        /*for (var i = 0; i < this.navgation.length; i++) {
          console.log(this.navgation[i]);
        }*/
        const po = Math.abs(position.y) + 33;
        /*console.log(po);*/
        if(po > this.navgation[0] && po < this.navgation[1]){
          this.$refs.detail_nav.currentIndex = 0;
        } else if(po > this.navgation[1] && po < this.navgation[2]){
          this.$refs.detail_nav.currentIndex = 1;
        }else if(po > this.navgation[2] && po < this.navgation[3]){
          this.$refs.detail_nav.currentIndex = 2;
        }else if(po > this.navgation[3]){
          this.$refs.detail_nav.currentIndex = 3;
        }
      },

      //加入购物车信息
      addToCar(){
        //获取购物车需要展示的信息

        const shop_goods = {};
        shop_goods.image = this.topImg[0];
        shop_goods.title = this.goods.title;
        shop_goods.desc = this.goods.desc;
        shop_goods.price = this.goods.realPrice;
        shop_goods.iid = this.iid;
        shop_goods.isCheck = false;

        this.$store.commit('addToCar',shop_goods);
      }
    },



    created() {
      //保存传入的iid
      this.iid = this.$route.params.iid;

      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        //轮播图数据
        const data = res.result;
        this.topImg = data.itemInfo.topImages;


        //获取商品杂乱信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //获取商家信息
        this.shop = new Shop(data.shopInfo);

        //获取商品详情数据
        this.goods_Info = data.detailInfo;

        //获得尺码信息
        this.goods_measure = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //获取商品信息
        if(data.rate.cRate !== 0){
          this.goods_comment = data.rate.list[0];
        }


      });


      //获取推荐数据
      getRecommend().then(res => {
        this.goods_recommend = res.data.list;
      });


      this.getHome = this.debounce(() => {
        this.navgation.push(0);
        this.navgation.push(this.$refs.param.$el.offsetTop);
        this.navgation.push(this.$refs.comment.$el.offsetTop);
        this.navgation.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.navgation);
      },100)
    },


    updated() {

    }
  }
</script>

<style scoped>
  .navbar1{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999;
  }
  .detail{
    position: relative;
    z-index: 999;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
</style>