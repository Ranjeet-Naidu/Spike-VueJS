import Vue from 'vue';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import filter from './helpers/filters';

import '../node_modules/vuetify/dist/vuetify.min.css';

// register external library
Vue.use(Vuetify);
Vue.use(VeeValidate);

// add global filters
Vue.filter('capitalize', filter.capitalize);

// create new app
const entryPoint = new Vue({
  ...App,
  router,
  store
});

// mount to element
entryPoint.$mount('#app');

export { Vue, entryPoint, router, store };
