import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    logedIn: false,
  },
  mutations: {
    SET_USER(state,data){
      state.user=data
      //console.log(state.user)
    },
    SET_LOGIN(state,data){
      state.logedIn=data
      //console.log(state.logedIn)
      //console.log("??")
    },
  },
  actions: {
    setUser({commit}, state){
      //console.log("success")
      commit('SET_USER', state)
    },
    userLogIn({commit}, state){
      commit('SET_LOGIN', state)
    }
  },
  modules: {
  }
})
