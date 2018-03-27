function getRandomPackshotData() {
  const imageList = [
    '182',
    '46',
    '236',
    '327',
    '295',
    '62',
    '409',
    '247',
    '284',
    '376',
    '43',
    '301',
    '258',
    '20',
    '426',
    '114',
    '78',
    '337',
    '112',
    '63',
    '461',
    '281',
    '250',
    '480',
    '87',
    '345',
    '29',
    '448',
    '421',
    '491'
  ];

  return imageList.map(item => {
    return {
      src: `https://picsum.photos/64/94/?image=${item}`,
      isSelected: false,
      isHidden: false
    };
  });
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

export default {
  setPackshotData,
  onSelection,
  onDndStartAndStop,
  onUpdate
};
