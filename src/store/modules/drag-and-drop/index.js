import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  initialSelection:100,
  formItem:{
    "name": "Images",
    "multiValue": false,
    "languageAgnostic": true,
    "datagramValueType": "REF_CODE",
    "validators": [],
    "rank": 1,
    "hidden": false,
    "visibleOnClientApi": true,
    "editable": true,
    "items": [
      {
        "value":100,
        "text": "100"
      },
      {
        "value": 300,
        "text": "300"
      },
      {
        "value": 600,
        "text": "600"
      },
      {
        "value": 900,
        "text": "900"
      },
      {
        "value": 1200,
        "text": "1200"
      }
    ],
    "validation": "",
    "counter": null
  },
  packshotData: [
    {
      name: 'listOne',
      packshots: []
    },
    {
      name: 'listTwo',
      packshots: []
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
