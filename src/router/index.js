import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../views/Landing.vue';
import DemoPage from '../views/Demo.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/demo/:type',
      component: DemoPage
    }
  ]
});

export default router;
