import Vue from 'vue';

function setSelection(packshotData, selected) {
  const selectedPackshot = packshotData
    .find(packshotItem => packshotItem.name === selected.name)
    .packshots.find(imageItem => imageItem.src === selected.data);

  selectedPackshot.isSelected = !selectedPackshot.isSelected;
}

// function insertArrayAt(array, index, arrayToInsert) {
//   Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert));
//   return array;
// }

// Array.prototype.move = function(from, to) {
//   this.splice(to, 0, this.splice(from, 1)[0]);
//   return this;
// };

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
  // console.log('SET_PACKSHOT_DATA');
  state.packshotData[0].packshots = data.splice(0, Math.floor(data.length / 2));
  state.packshotData[1].packshots = data;
};

const PACKSHOT_SELECTED = (state, data) => {
  // console.log('PACKSHOT_SELECTED');
  setSelection(state.packshotData, data);
};

const DND_START_STOP = (state, data) => {
  // console.log('DND_START_STOP', data);
  state.packshotData
    .find(packshotItem => packshotItem.name === data.name)
    .packshots.forEach((item, index) => {
      if (index !== data.data.oldIndex) {
        // item.isHidden = item.isSelected && data.type === 'onStart';
      }

      // item.isSelected = !data.type === 'onStop';
    });
};

const DND_UPDATE = (state, data) => {
  // console.log('DND_UPDATE', data);

  const selectedList = state.packshotData.find(
    packshotItem => packshotItem.name === data.name
  );

  // const packshots = selectedList.packshots.filter((item, index) => index !== 1);

  const packshots = selectedList.packshots;
  const selected = packshots.filter(item => item.isSelected);
  const unselected = packshots.filter(item => !item.isSelected);
  const newIndexSrc = packshots[data.data.newIndex].src;
  let indexOnUnSelected = unselected.findIndex(
    item => item.src === newIndexSrc
  );

  if (data.data.oldIndex > data.data.newIndex) {
    console.log('up');
    // indexOnUnSelected = indexOnUnSelected - 1;
  } else {
    console.log('down');
    indexOnUnSelected = indexOnUnSelected + 1;
  }

  // if none selected
  // if (!selected.length) {
  //   packshots.move(data.data.oldIndex, data.data.newIndex);
  //   Vue.set(selectedList, 'packshots', packshots);
  // }

  // console.log(
  //   `old index: ${data.data.oldIndex}, new index: ${data.data.newIndex}`
  // );
  // console.log('packshots ', packshots);
  // console.log('packshot newIndex src ', newIndexSrc);
  // console.log('selected ', selected);
  // console.log('unselected ', unselected);
  // console.log('indexOnUnSelected ', indexOnUnSelected);

  // var arrayOne = ["a", "b", "c"],
  // arrayTwo = [1, 2, 3, 4, 5], index = 2;

  // arrayOne.unshift(1, 0);

  // Array.prototype.splice.apply(arrayTwo, arrayOne);

  // arrayTwo

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

  // unselected.splice(indexOnUnSelected, 0, ...selected);

  // const modified = insertArrayAt(unselected, indexOnUnSelected, selected)
  //   .map(item => {
  //     return {
  //       ...item,
  //       isSelected: false,
  //       isHidden: false
  //     };
  //   });

  // console.log(JSON.stringify(modified, null, 2));

  Vue.set(selectedList, 'packshots', modified);
};

export default {
  SET_PACKSHOT_DATA,
  PACKSHOT_SELECTED,
  DND_START_STOP,
  DND_UPDATE
};
