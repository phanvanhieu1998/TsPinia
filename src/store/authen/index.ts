
const state = () => ({
  loading: false,
  rtlLoading: false,
  menuLoading: "xx",
  error: null,
});
const getters = {
    haha: (state: any) => state.menuLoading
}
const mutations = {
    SET_DATA_QUESTION_CACHE(state: any) {
        state.questionsCache = JSON.stringify(state.questions);
      },
}
const actions = {
  async changeLayoutMode({ commit }: any, value: any) {
    try {
      commit('changeLayoutBegin');
      setTimeout(() => commit('changeLayoutSuccess', value), 10);
    } catch (err) {
      commit('changeLayoutErr', err);
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
