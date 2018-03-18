const counter = state => {
  console.log('in getter ', state);
  return state.counter;
};

export default {
  counter
};
