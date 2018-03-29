import nanoid from 'nanoid';

function getRandomPackshotData() {
  let imageList = [];

  for (let index = 0; index < 60; index++) {
    imageList.push({
      src: `https://placeimg.com/64/94/any/${nanoid(5)}`,
      isSelected: false,
      isHidden: false
    });
  }

  return imageList;
}

const setPackshotData = context => {
  context.commit('SET_PACKSHOT_DATA', getRandomPackshotData());
};

const onSelection = (context, data) => {
  context.commit('PACKSHOT_SELECTED', data);
};

const onDndStartAndStop = (context, data) => {
  context.commit('DND_START_STOP', data);
};

const onUpdate = (context, data) => {
  context.commit('DND_UPDATE', data);
};

const onAdd = (context, data) => {
  context.commit('DND_ADD', data);
};

const onRemove = (context, data) => {
  context.commit('DND_REMOVE', data);
};

export default {
  setPackshotData,
  onSelection,
  onDndStartAndStop,
  onUpdate,
  onAdd,
  onRemove
};
