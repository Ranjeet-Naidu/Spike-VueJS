import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const entryPoint = new Vue({
  ...App,
  router,
  store
});

entryPoint.$mount('#app');

export { entryPoint, router, store };
