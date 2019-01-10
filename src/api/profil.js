import axios from '../axios.config';

export default {
    async getInfosBase() {
        try {
            const reponse = await axios('/api/common/user/infos/');
            return reponse.data;
        } catch (error) {
            throw (error);
        }
    },
    async getInfosComplete(id) {
        try {
            const reponse = await axios(`/api/healthyapp/profile/${id}/`);
            return reponse.data;
        } catch (error) {
            throw (error);
        }
    },
};
