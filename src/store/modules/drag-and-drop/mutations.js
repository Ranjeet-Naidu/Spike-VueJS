function setSelection(packshotData, selected) {
  const selectedPackshot = packshotData
    .find(packshotItem => packshotItem.name === selected.name)
    .packshots.find(imageItem => imageItem.src === selected.data);

  selectedPackshot.isSelected = !selectedPackshot.isSelected;
}

const SET_PACKSHOT_DATA = (state, data) => {
  state.packshotData[0].packshots = data.splice(0, Math.floor(data.length / 2));
  state.packshotData[1].packshots = data;
};

const PACKSHOT_SELECTED = (state, data) => {
  setSelection(state.packshotData, data);
};

export default {
  SET_PACKSHOT_DATA,
  PACKSHOT_SELECTED
};
