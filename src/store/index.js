import Vue from 'vue';
import Vuex from 'vuex';
import demoModule from './modules/demo';
import navigationModule from './modules/navigation';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    demo: demoModule,
    navigation: navigationModule
  }
});
