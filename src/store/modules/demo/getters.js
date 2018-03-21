const counter = state => {
  return state.counter;
};

const posts = state => {
  return state.posts;
};

const photos = state => {
  return state.photos;
};

const selectedEmail = state => {
  return state.selectedEmail;
};

export default {
  counter,
  posts,
  photos,
  selectedEmail
};
