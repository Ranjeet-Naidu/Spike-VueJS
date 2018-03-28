import Vue from 'vue';

/**
 * Set packshot selection
 */
function setSelection(packshotData, selected) {
  const selectedPackshot = packshotData
    .find(packshotItem => packshotItem.name === selected.name)
    .packshots.find(imageItem => imageItem.src === selected.data);

  selectedPackshot.isSelected = !selectedPackshot.isSelected;
}

/**
 * Swap element indexes in array
 */
Array.prototype.swap = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};

/**
 * Insert array into another array a by index
 */
function insertArrayByIndex(array, arrayToInsert, insertAt) {
  let modified;

  if (array.length <= insertAt) {
    modified = [...array, ...arrayToInsert];
  } else {
    modified = array.reduce((acc, curr, index) => {
      if (index === insertAt) {
        arrayToInsert.forEach(item => {
          acc.push(item);
        });
      }

      acc.push(curr);
      return acc;
    }, []);
  }

  return modified;
}

const SET_PACKSHOT_DATA = (state, data) => {
  state.packshotData[0].packshots = data.splice(0, Math.floor(data.length / 2));
  state.packshotData[1].packshots = data;
};

const PACKSHOT_SELECTED = (state, data) => {
  setSelection(state.packshotData, data);
};

const DND_START_STOP = (state, data) => {
  state.packshotData
    .find(packshotItem => packshotItem.name === data.name)
    .packshots.forEach((item, index) => {
      if (index !== data.data.oldIndex) {
        item.isHidden = item.isSelected && data.type === 'onStart';
      }
    });
};

const DND_UPDATE = (state, data) => {
  const selectedList = state.packshotData.find(
    packshotItem => packshotItem.name === data.name
  );

  const packshots = selectedList.packshots;
  const selected = packshots.filter(item => item.isSelected);
  const unselected = packshots.filter(item => !item.isSelected);
  const newIndexSrc = packshots[data.data.newIndex].src;
  let indexOnUnSelected = unselected.findIndex(
    item => item.src === newIndexSrc
  );

  if (data.data.oldIndex < data.data.newIndex) {
    indexOnUnSelected = indexOnUnSelected + 1;
  }

  if (!selected.length) {
    // No packshots selected
    packshots.swap(data.data.oldIndex, data.data.newIndex);
    Vue.set(selectedList, 'packshots', packshots);
  } else {
    // With packshots selected
    const modified = insertArrayByIndex(
      unselected,
      selected,
      indexOnUnSelected
    ).map(item => {
      return {
        ...item,
        isSelected: false,
        isHidden: false
      };
    });
    Vue.set(selectedList, 'packshots', modified);
  }
};

export default {
  SET_PACKSHOT_DATA,
  PACKSHOT_SELECTED,
  DND_START_STOP,
  DND_UPDATE
};
