import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)


const state = {
  user:{
    status: 'INVALID',
    id: '',
    username: '',
    role: ''
  },
}

const mutations = {
  setUser(state, user){
    state.user.status = user.status;
    state.user.id = user.id;
    state.user.username = user.username;
    state.user.role = user.role;
  },
}

const getters = {
  user:state => state.user,
}

const actions = {}


let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  plugins: [new VuexPersistence().plugin]
})

global.store = store
export default store