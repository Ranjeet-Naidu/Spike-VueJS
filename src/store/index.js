import Vue from 'vue';
import Vuex from 'vuex';
import demoModule from './modules/demo';
import navigationModule from './modules/navigation';
import formBuilderModule from './modules/form-builder';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    demo: demoModule,
    navigation: navigationModule,
    formBuilder: formBuilderModule
  }
});
