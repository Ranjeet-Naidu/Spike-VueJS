import Vue from 'vue';
import App from './App.vue';
import router from './router';

const entryPoint = new Vue({
  ...App,
  router
});

entryPoint.$mount('#app');

export { entryPoint, router };
