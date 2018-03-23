import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../views/Landing.vue';
import DemoPage from '../views/Demo.vue';
import FormBuilder from '../views/FormBuilder';
import DragAndDrop from '../views/DragAndDrop';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: [
    {
      name: 'Landing',
      path: '/',
      component: LandingPage
    },
    {
      name: 'Demo',
      path: '/demo/:type',
      component: DemoPage
    },
    {
      name: 'Form builder',
      path: '/form-builder',
      component: FormBuilder
    },
    {
      name: 'Drag and drop',
      path: '/drag-and-drop',
      component: DragAndDrop
    }
  ]
});

export default router;
