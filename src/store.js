import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    sessionToken: '',
    userId: ''
  },
  mutations: {
    UPDATE_TOKEN (state, sessionToken) {
      state.sessionToken = sessionToken
    },
    UPDATE_ID (state, userId) {
      state.userId = userId
    }
  },
  strict: true // anti intern device
})

export default store
