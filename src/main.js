import Vue from 'vue';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';

import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VeeValidate);

const entryPoint = new Vue({
  ...App,
  router,
  store
});

entryPoint.$mount('#app');

export { entryPoint, router, store };
