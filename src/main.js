import Vue from 'vue';
import App from './App.vue';

const entryPoint = new Vue({
  render: h => h(App)
});

entryPoint.$mount('#app');
