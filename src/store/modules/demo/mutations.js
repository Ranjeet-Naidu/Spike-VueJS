const INCREMENT_COUNTER = (state, counter) => {
  console.log('in mutation', counter);
  state.counter = counter + 1;
};

export default {
  INCREMENT_COUNTER
};
