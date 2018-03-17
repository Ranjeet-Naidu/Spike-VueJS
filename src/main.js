import Vue from "vue";
import App from "./App.vue";
import router from "./router";

const entryPoint = new Vue({
  router,
  render: h => h(App)
});

entryPoint.$mount("#app");

export { entryPoint, router };
