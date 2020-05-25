import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//加了之后就不报错 Uncaught (in promise) undefined
import Router from 'vue-router'

//解决移动端300ms延迟
import fastclick from 'fastclick'
fastclick.attach(document.body);

import toast from 'components/common/toast'
Vue.use(toast);



Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//加了之后就不报错 Uncaught (in promise) undefined
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
