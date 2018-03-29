import Vue from 'vue';
import {
  swapIndex,
  insertArrayByIndex,
  removeElementsArray
} from '../../../helpers/array-enhancer';

/**
 * Set packshot selection
 */
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

const DND_START_STOP = (state, data) => {
  state.packshotData
    .find(packshotItem => packshotItem.name === data.name)
    .packshots.forEach((item, index) => {
      if (index !== data.data.oldIndex) {
        item.isHidden = item.isSelected && data.type === 'onStart';
      }
    });
};

/**
 * Handles drag and drop for multiple or single packshot within a list
 */
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
    swapIndex(packshots, data.data.oldIndex, data.data.newIndex);
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

/**
 * Adds multiple or single packshot within a list
 */
const DND_ADD = (state, data) => {
  const addToList = state.packshotData.find(
    packshotItem => packshotItem.name === data.name
  );

  const addFromList = state.packshotData.find(
    packshotItem => packshotItem.name === data.data.from.id
  );

  const selectedIndexes = addFromList.packshots.reduce((a, e, i) => {
    if (e.isSelected) {
      a.push(i);
    }
    return a;
  }, []);

  if (!selectedIndexes.length) {
    // No packshots selected
    addToList.packshots.splice(data.data.newIndex, 0, addFromList.packshots[data.data.oldIndex]);
  } else {
    // With packshots selected
    const selected = addFromList.packshots.filter(item => item.isSelected);
    const modified = insertArrayByIndex(addToList.packshots, selected, data.data.newIndex)
      .map(item => {
        return {
          ...item,
          isSelected: false,
          isHidden: false
        };
      });

    Vue.set(addToList, 'packshots', modified);
  }
};

/**
 * Removes multiple or single packshot within a list
 */
const DND_REMOVE = (state, data) => {
  const selectedList = state.packshotData.find(
    packshotItem => packshotItem.name === data.name
  );

  const selectedIndexes = selectedList.packshots.reduce(function(a, e, i) {
    if (e.isSelected) {
      a.push(i);
    }
    return a;
  }, []);

  if (!selectedIndexes.length) {
    // No packshots selected
    Vue.set(
      selectedList,
      'packshots',
      removeElementsArray(selectedList.packshots, [data.data.oldIndex])
    );
  } else {
    // With packshots selected
    Vue.set(
      selectedList,
      'packshots',
      removeElementsArray(selectedList.packshots, selectedIndexes)
    );
  }
};

export default {
  SET_PACKSHOT_DATA,
  PACKSHOT_SELECTED,
  DND_START_STOP,
  DND_UPDATE,
  DND_ADD,
  DND_REMOVE
};
