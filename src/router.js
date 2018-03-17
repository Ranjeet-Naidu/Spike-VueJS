import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "./containers/Landing.vue";
import DemoPage from "./containers/Demo.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: LandingPage
    },
    {
      path: "/demo",
      component: DemoPage
    }
  ]
});

export default router;
