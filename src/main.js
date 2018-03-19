import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const entryPoint = new Vue({
  ...App,
  router,
  store
});

entryPoint.$mount('#app');

export { entryPoint, router, store };
