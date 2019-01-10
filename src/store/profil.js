import profilAPI from '@/api/profil';

export default {
    state: {
        infosBase: {},
        infosComplete: {},
    },
    getters: {
        profilBase: state => state.infosBase,
        profilComplet: state => state.infosComplete,
    },
    actions: {
        async getInfosComplete({state, commit}) {
            try {
                const infos = await profilAPI.getInfosComplete(state.infosBase.id);
                commit('setInfosComplete', infos);
            } catch (error) {
                console.log(error);
            }
        },
        async getInfosBase({commit}) {
            try {
                const infos = await profilAPI.getInfosBase();
                commit('setInfosBase', infos);
            } catch (error) {
                console.log(error);
            }
        },
    },
    mutations: {
        setInfosBase(state, infos) {
            state.infosBase = infos;
        },
        setInfosComplete(state, infos) {
            state.infosComplete = infos;
        },
    },
};
