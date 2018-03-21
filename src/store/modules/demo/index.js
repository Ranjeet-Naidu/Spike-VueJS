import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  counter: 1,
  posts: [],
  photos: [],
  selectedEmail: ''
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
