export default {
  namespaced : true,

  state : {
    stack : [],
  },

  getters : {
    pageStack : state => state.stack,
  },

  mutations : {
    reset(state, page) {
      state.stack = Array.isArray(page) ? page : [page || state.stack[0]]
    },
  },
}

