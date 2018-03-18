import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  counter: 1,
  posts: []
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
