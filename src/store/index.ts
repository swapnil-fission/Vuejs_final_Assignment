import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    storepreviosdata: []
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload
    },
    Add_User_previosdata: (state, data) => {
      state.storepreviosdata = Object.assign({}, data)
    }
  },
  actions: {
    setUsersAction: (state, payload) => {
      state.commit('setUsers', payload)
    }
  },
  modules: {},
  getters: {
    listOfUsers: (state) => state.users
  }
})
