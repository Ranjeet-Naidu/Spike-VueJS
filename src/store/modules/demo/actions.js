const incrementCounter = (context, counter) => {
  console.log('in action', counter);
  context.commit('INCREMENT_COUNTER', counter);
};

export default {
  incrementCounter
};
