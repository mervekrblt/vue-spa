import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
  },
  mutations: {
    SET_USER(state,data){
      state.user=data
    },
  },
  actions: {
    setUser({commit}, state){
      console.log("oldu")
      commit('SET_USER', state)
    },
  },
  modules: {
  }
})
