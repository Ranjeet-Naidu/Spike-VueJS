import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  navData: [
    {
      title: 'Landing',
      icon: 'dashboard',
      route: '/'
    },
    {
      title: 'Demo posts',
      icon: 'dashboard',
      route: '/demo/posts'
    },
    {
      title: 'Demo photos',
      icon: 'dashboard',
      route: '/demo/photos'
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
