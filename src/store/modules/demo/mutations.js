const INCREMENT_COUNTER = (state, counter) => {
  state.counter = counter + 1;
};

const GET_POSTS_SUCCESS = (state, data) => {
  state.posts = data;
};

export default {
  INCREMENT_COUNTER,
  GET_POSTS_SUCCESS
};
