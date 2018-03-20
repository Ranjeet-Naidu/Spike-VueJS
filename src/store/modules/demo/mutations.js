const INCREMENT_COUNTER = (state, counter) => {
  state.counter = counter + 1;
};

const GET_POSTS_SUCCESS = (state, data) => {
  state.photos = [];
  state.posts = data;
};

const GET_PHOTOS_SUCCESS = (state, data) => {
  state.photos = data;
  state.posts = [];
};

const RESET_STATE = state => {
  state.posts = [];
  state.photos = [];
};

export default {
  INCREMENT_COUNTER,
  GET_POSTS_SUCCESS,
  GET_PHOTOS_SUCCESS,
  RESET_STATE
};
