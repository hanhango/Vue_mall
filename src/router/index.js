import Vue from 'vue'
import VueRouter from 'vue-router'

const TabBar = () => import('components/common/tabbar/TabBar')
const TabBarItem = () => import('components/common/tabbar/TabBarItem')

const Category = () => import('views/category/Category')
const Home = () => import('views/Home/Home')
const User = () => import('views/profile/User')
const Shopcart = () => import('views/Shopcart/Shopcart');
const Detail = () => import('views/detailpage/Detail')

Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Category',
      component: Category
    },
    {
      path: '/Shopcart',
      component: Shopcart
    },
    {
      path: '/User',
      component: User
    },
    {
      path: '/TabBarItem',
      component: TabBarItem
    },
    {
      path: '/Detail/:iid',
      component: Detail
    },
    {
      path: 'TabBar',
      component: TabBar
    }
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
