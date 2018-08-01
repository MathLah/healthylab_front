import repasAPI from '@/api/repas'

export default {
  state : {
    listeRepasCommande : [],
    repasConseilles : [],
    repasConsommes : [],
    commande : [],
  },
  getters : {
    allRepasConseilles : state => state.repasConseilles,
    repasConseillesByID : state => id =>
      state.repasConseilles[state.repasConseilles.find(repas => repas.id === id)],
    caloriesRepasConsommes : state =>
      state.repasConsommes.reduce((prev, current) => prev + current, 0),
    listeRepasCommande : state => state.listeRepasCommande,
  },
  actions : {
    async getAllRepasConseilles({ commit }) {
      try {
        const repas = await repasAPI.getRepasConseilles()
        commit('setRepasConseilles', repas)
        return repas
      } catch (error) {
        console.log(error)
        return []
      }
    },
    async getRepasCommande({ commit }) {
      try {
        const repas = await repasAPI.getRepasCommande()
        commit('setRepasCommande', repas)
        return repas
      } catch (error) {
        console.log(error)
        return []
      }
    },
    async passerCommande({ commit }, commande) {
      try {
        const repas = await repasAPI.passerCommande(commande)
        commit('setCommande', repas)
        return repas
      } catch (error) {
        console.log(error)
        return []
      }
    },
  },
  mutations : {
    setRepas(state, repas) {
      state.repasConseilles = repas
    },
    setRepasCommande(state, repas) {
      state.listeRepasCommande = repas
    },
    setCommande(state, repas) {
      state.commande = repas
    },
  },
}
