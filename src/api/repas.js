import axios from '../axios.config'

export default {
  async getRepasConseilles() {
    try {
      const reponse = await axios('/api/repas/')
      return reponse.data.results
    } catch (error) {
      throw (error)
    }
  },
}
