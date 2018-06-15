import activitesAPI from '@/api/activites'

export default {
  state : {
    activites : [],
  },
  getters : {
    activites : state => state.activites,
    caloriesActivites : state => state.activites.reduce((prev, current) => current.kcal + prev, 0),
  },
  actions : {
    async getActivites({ state, commit }) {
      try {
        const infos = await activitesAPI.getActivites(state.infosBase.id)
        commit('setInfosComplete', infos)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations : {
    setActivites(state, infos) {
      state.infosBase = infos
    },
  },
}
