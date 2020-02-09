import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loginDialogVisible: false
}

const mutations = {
  SET_loginDialogVisible (state, visible) {
    state.loginDialogVisible = visible
  }
}

const getters = {
  dialogVisible: state => state.loginDialogVisible
}

const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
