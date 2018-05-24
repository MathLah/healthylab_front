import Vue from 'vue'
import Vuex from 'vuex'
//  import des differents modules
import authApi from '@/api/auth'
import repas from './repas'
import profil from './profil'
import navigator from './navigator'


Vue.use(Vuex)

const app = {
  state : {
    token : localStorage.getItem('token'),
    title : null,
  },
  getters : {
    isLoggedIn : state => !!state.token,
  },
  mutations : {
    setToken(state, token) {
      localStorage.setItem('token', token)
      state.token = token
    },
    changeTitle(state, title) {
      state.title = title
    },
  },
  actions : {
    async login({ commit }, credentials) {
      try {
        const reponse = await authApi.login(credentials)
        commit('setToken', reponse.token)
        return reponse
      } catch (error) {
        throw error
      }
    },
    logout({ commit }) {
      commit('setToken', null)
      commit('setInfos', null)
    },
  },
}

export default new Vuex.Store({
  ...app,
  modules : {
    repas,
    profil,
    navigator,
  },
})
