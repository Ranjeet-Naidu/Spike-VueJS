
import { shallow, createLocalVue } from '@vue/test-utils';
import App from './App';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VueRouter);
localVue.use(Vuex);

describe('App.test.js', () => {
//   let cmp;
//   let vm;

//   beforeEach(() => {
//     cmp = Vue.extend(App);
//     vm = new cmp({
//       data: {
//         messages: ['Cat']
//       }
//     }).$mount();
//   });

  it('has the expected html structure', () => {
    const wrapper = shallow(App, {
      localVue,
      data: {
        drawer: false
      }
    });

    expect(wrapper.element).toMatchSnapshot();

    // console.log(wrapper.vm.test);
    // localVue.use(Vuetify);
// localVue.use(VueRouter);
    // console.log(vm);
    // expect(1).toEqual(1);

  });
});
