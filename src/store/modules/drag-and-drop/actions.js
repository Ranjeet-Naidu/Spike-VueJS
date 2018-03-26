const onSelection = (context, data) => {
  context.commit('PACKSHOT_SELECTED', data);
};

export default {
  onSelection
};
