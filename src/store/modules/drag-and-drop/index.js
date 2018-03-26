import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  packshotData: [
    {
      name: 'listOne',
      packshots: []
    },
    {
      name: 'listTwo',
      packshots: []
    }
  ]
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
