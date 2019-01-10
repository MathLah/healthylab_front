import axios from '../axios.config';

export default {
    async getActivites() {
        try {
            const reponse = await axios('/api/');
            return reponse.data;
        } catch (error) {
            throw (error);
        }
    },
};
