import axios from '../axios.config';

export default {
    async login(credentials) {
        try {
            const reponse = await axios.post('/api/auth/', {...credentials});
            return reponse.data;
        } catch (error) {
            throw (error);
        }
    },
};
