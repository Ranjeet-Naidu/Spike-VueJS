import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  imageListOne: [
    {
      src: `https://picsum.photos/64/94/?image=101`
    },
    {
      src: 'https://picsum.photos/64/94/?image=102'
    },
    {
      src: 'https://picsum.photos/64/94/?image=103'
    },
    {
      src: 'https://picsum.photos/64/94/?image=104'
    },
    {
      src: 'https://picsum.photos/64/94/?image=100'
    },
    {
      src: 'https://picsum.photos/64/94/?image=106'
    },
    {
      src: 'https://picsum.photos/64/94/?image=107'
    },
    {
      src: 'https://picsum.photos/64/94/?image=108'
    },
    {
      src: `https://picsum.photos/64/94/?image=109`
    },
    {
      src: 'https://picsum.photos/64/94/?image=110'
    },
    {
      src: 'https://picsum.photos/64/94/?image=111'
    },
    {
      src: 'https://picsum.photos/64/94/?image=112'
    },
    {
      src: 'https://picsum.photos/64/94/?image=113'
    },
    {
      src: 'https://picsum.photos/64/94/?image=114'
    },
    {
      src: 'https://picsum.photos/64/94/?image=115'
    },
    {
      src: 'https://picsum.photos/64/94/?image=116'
    }
  ],
  imageListTwo: [
    {
      src: 'https://picsum.photos/64/94/?image=117'
    },
    {
      src: 'https://picsum.photos/64/94/?image=118'
    },
    {
      src: 'https://picsum.photos/64/94/?image=119'
    },
    {
      src: 'https://picsum.photos/64/94/?image=120'
    },
    {
      src: 'https://picsum.photos/64/94/?image=121'
    },
    {
      src: 'https://picsum.photos/64/94/?image=122'
    },
    {
      src: 'https://picsum.photos/64/94/?image=123'
    },
    {
      src: 'https://picsum.photos/64/94/?image=124'
    },
    {
      src: 'https://picsum.photos/64/94/?image=125'
    },
    {
      src: 'https://picsum.photos/64/94/?image=126'
    },
    {
      src: 'https://picsum.photos/64/94/?image=127'
    },
    {
      src: 'https://picsum.photos/64/94/?image=128'
    },
    {
      src: 'https://picsum.photos/64/94/?image=129'
    },
    {
      src: 'https://picsum.photos/64/94/?image=130'
    },
    {
      src: 'https://picsum.photos/64/94/?image=131'
    },
    {
      src: 'https://picsum.photos/64/94/?image=132'
    }
  ]
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
