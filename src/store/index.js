import Vue from 'vue';
import Vuex from 'vuex';
import demoModule from './modules/demo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    demo: demoModule
  }
});
