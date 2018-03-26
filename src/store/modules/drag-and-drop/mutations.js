import Vue from 'vue';

function setSelection(packshotData, selected) {
  const packshotDataClone = [...packshotData];

  packshotDataClone
    .find(packshotItem => packshotItem.name === selected.name)
    .packshots.find(
      imageItem => imageItem.src === selected.data
    ).selected = true;

  return packshotDataClone;
}

const PACKSHOT_SELECTED = (state, data) => {
  Vue.set(state, 'packshotData', setSelection(state.packshotData, data));
};

export default {
  PACKSHOT_SELECTED
};
