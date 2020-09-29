import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  json:[],
};
const mutations = {
  setJson( state,data){
    state.json = data
  }
};
const actions = {
  getJson({commit},data){

  }
};
export const store = new Vuex.Store({
  state,mutations,actions,

})
