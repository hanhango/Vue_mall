<template>
  <div id="Home">
    <NavBar class="Home_nav">
      <div class="Home-nav-center" slot="nav_center">购物街</div>
    </NavBar>
    <SelectStyle ref="sel_1" @get_pns="handle" v-show="ShowSel" class="sel" :titles="['流行','新款','精选']"></SelectStyle>
    <back-top @click.native="scroll_click"  v-show="isShowBack"></back-top>
    <Scroll class="scroll_h"
            ref="pst"
            :pull-up-load="true"
            :probe-type="3"
            @backTopShow="back_position"
            @ispullup="pullup">

      <home-swiper @swiperImageLoad="imgLoad" class="swiper1" :banners="banners"></home-swiper>

      <HomeRecommend :recommends="recommends"></HomeRecommend>

      <HomeFashion :dKeyword="dKeyword"></HomeFashion>

      <SelectStyle @click.native="sel_click"  @get_pns="handle" ref="S_page" :titles="['流行','新款','精选']"></SelectStyle>

      <GoodsList :goods="showGoods"></GoodsList>

    </Scroll>

  </div>
</template>

<script>
  //导入多个时，这种方式写更直观
  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home";

  import Scroll from 'components/common/scroll/Scroll'


  import NavBar from 'components/common/navbar/NavBar'
  import SelectStyle from 'components/content/selectstyle/SelectStyle'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import HomeFashion from './childComps/HomeFashion'
  import GoodsList from 'components/content/goods/GoodsList'
  import backTop from "../../components/content/backtop/backTop";

  import { Button } from 'vant';
  export default {
    name: "Home",
    data(){
      return{
        goods_type: 'pop',
        data_res: null,
        banners: [],
        recommends: [],
        dKeyword: [],
        whosPage: Number,
        saveY: Number,
        ShowSel: false,
        goods: {
          'pop': {page :0, list:[]},
          'new': {page :0, list:[]},
          'sell': {page :0, list:[]},
        },
        isShowBack: false,
        sel_offsetTop: Number
      }
    },


    computed: {
      //获取列表代码太长了，computed简化下
      showGoods(){
        return this.goods[this.goods_type].list
      }
    },

    components: {
      backTop,
      Scroll,
      NavBar,
      SelectStyle,

      HomeFashion,
      HomeSwiper,
      HomeRecommend,
      GoodsList,
    },




    methods: {

      /*
      * 事件监听相关
      * */
      sel_click(){

      },

      handle(page){
        this.$refs.S_page.currentIndex = page;
        this.$refs.sel_1.currentIndex = page;
        if(page === 0){
          this.goods_type = 'pop'
        }else if(page === 1){
          this.goods_type = 'new'
        }else{
          this.goods_type = 'sell'
        }
      },

      scroll_click(){
        this.$refs.pst.scrollTo(0,0,400);
      },

      back_position(position){
        /*console.log(this.$refs.pst.scroll.y);*/

        if (position.y < -634.058837890625){
          this.isShowBack = true;
        }else {
          this.isShowBack = false;
        }

        if(Math.abs(this.$refs.pst.scroll.y) > this.sel_offsetTop + 44){
          /*console.log(this.$refs.pst.scroll.y);*/
          this.ShowSel = true;
        }else {
          this.ShowSel = false;
        }

      },

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

      pullup(){
        /*this.whosPage = this.$refs.S_page.currentIndex;
        console.log(this.whosPage);
        if(this.whosPage === 0){
          this.getHomeGoods('pop');
        }else if(this.whosPage === 1){
          this.getHomeGoods('new');
        }else{
          this.getHomeGoods('sell');
        }*/
        this.getHomeGoods(this.goods_type);
      },



      imgLoad(){
        this.sel_offsetTop = this.$refs.S_page.$el.offsetTop;
        /*console.log(this.$refs.S_page.$el.offsetTop);*/
      },
      /*
      * 网络请求相关
      * */

      /*这个是methods方法名*/getHomeMultidata(){
        /*这个是axios请求函数名*/getHomeMultidata().then(res => {
          this.data_res = res.data;
          /*console.log(this.data_res);*/
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          this.dKeyword = res.data.dKeyword;
        });
      },

      getHomeGoods(type){
        //提高复用性，不应该写死
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          /*console.log(res);*/
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        });
      }
    },




    created() {
      //1.请求多个数据
      this.getHomeMultidata();

      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },

    mounted() {
      //防抖动
      const refresh = this.debounce(this.$refs.pst.refresh,60);
      this.$bus.$on('imgLoaded',() => {
        /*const refresh = this.debounce(this.$refs.pst.scroll.refresh);
        refresh();*/
        refresh();
      })
    },


    activated() {
      this.$refs.pst.refresh()
      this.$refs.pst.scrollTo(0, this.saveY, 0)
    },


    deactivated() {
      this.saveY = this.$refs.pst.scroll.y;
    }
  }
</script>

<style scoped>
  .Home_nav{
    background-color: var(--color-tint);
    color: white;
    z-index: 9;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .swiper1{
    margin-top: 44px;
  }

  .sel{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #fff;
  }

  #Home{
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  .scroll_h{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    /*height: calc(100% - 73px);
    overflow: hidden;
    margin-top: 44px;*/
  }
</style>