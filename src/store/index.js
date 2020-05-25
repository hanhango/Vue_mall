import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    carlist: [],
    isAll: false
  },
  mutations: {
    addToCar(state,payload){
      let tem = null;
      var index = -1;
      for(let item of state.carlist){
        index++;
        if(item.iid === payload.iid){
          tem = payload;
          break;
        }
      }

      if(tem != null) {
        state.carlist[index].count++;
      }else {
        payload.count = 1;
        state.carlist.push(payload);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
