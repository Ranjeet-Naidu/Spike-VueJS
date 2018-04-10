import nanoid from 'nanoid';

function getRandomPackshotData(data) {
  let imageList = [];

  for (let index = 0; index < data; index++) {
    imageList.push({
      src: `https://placeimg.com/64/94/any/${nanoid(5)}`,
      isSelected: false,
      isHidden: false
    });
  }

  return imageList;
}

function setSetFormData(context, data) {
  context.commit('SET_PACKSHOT_DATA', getRandomPackshotData(data));
}

const setPackshotData = (context, data) => {
  context.commit('SET_PACKSHOT_DATA', getRandomPackshotData(data));
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
  setSetFormData,
  setPackshotData,
  onSelection,
  onDndStartAndStop,
  onUpdate,
  onAdd,
  onRemove
};
