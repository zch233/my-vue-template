const app = {
  state: {
    info: 'desktop'
  },
  mutations: {
    CHANGE_INFO: (state, info) => {
      state.info = info
    }
  },
  actions: {
    CloseSideBar ({ commit }, { withoutAnimation }) {
      commit('CHANGE_INFO', withoutAnimation)
    }
  }
}

export default app
