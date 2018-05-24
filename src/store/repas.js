import repasAPI from '@/api/repas'

export default {
  state : {
    repasConseilles : [],
  },
  getters : {
    AllRepasConseilles : state => state.repasConseilles,
    RepasConseillesByID : state => id =>
      state.repasConseilles[state.repasConseilles.find(repas => repas.id === id)],
  },
  actions : {
    async getAllRepasConseilles({ commit }) {
      try {
        const repas = await repasAPI.getRepasConseilles()
        commit('setRepas', repas)
        return repas
      } catch (error) {
        console.log(error)
        return 'yolo'
      }
    },
  },
  mutations : {
    setRepas(state, repas) {
      state.repasConseilles = repas
    },
  },
}
