import profilAPI from '@/api/profil'

export default {
  state : {
    infosBase : {},
    infosComplete : {},
  },
  getters : {
    profilBase : state => !!state.infosBase,
    profilComplet : state => !!state.infosComplete,
  },
  actions : {
    async getInfosComplete({ state, commit }) {
      try {
        console.log(this.state.infosBase.id)
        console.log(state.infosBase.id)
        const infos = await profilAPI.getInfosComplete(state.infosBase.id)
        commit('setInfosComplete', infos)
      } catch (error) {
        console.log(error)
      }
    },
  },
  mutations : {
    setInfosBase(state, infos) {
      state.infosBase = infos
    },
    setInfosComplete(state, infos) {
      state.infosComplete = infos
    },
  },
}
