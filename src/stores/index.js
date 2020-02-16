import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loginDialogVisible: false,
  language: sessionStorage.getItem('language') || 'zh_CN'
}

const mutations = {
  SET_loginDialogVisible (state, visible) {
    state.loginDialogVisible = visible
  },
  SET_Language (state, language) {
    state.language = language
    sessionStorage.setItem('language', language)
  }
}

const getters = {
  dialogVisible: state => state.loginDialogVisible,
  language: state => state.language
}

const actions = {}

export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions
})
