function getRandomPackshotData() {
  const randomPackshotData = [];
  for (let index = 0; index < 30; index++) {
    const obj = {
      src: `https://picsum.photos/64/94/?image=${Math.floor(
        Math.random() * 500
      )}`,
      isSelected: false
    };

    randomPackshotData.push(obj);
  }

  return randomPackshotData;
}

const setPackshotData = context => {
  context.commit('SET_PACKSHOT_DATA', getRandomPackshotData());
};

const onSelection = (context, data) => {
  context.commit('PACKSHOT_SELECTED', data);
};

export default {
  setPackshotData,
  onSelection
};
