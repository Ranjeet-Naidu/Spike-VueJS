import httpService from '../../../services/http-service';
import { API_URL } from '../../../constants/api-url';

const incrementCounter = (context, counter) => {
  context.commit('INCREMENT_COUNTER', counter);
};

const getPosts = async context => {
  const { data } = await httpService.get(API_URL.POSTS);
  context.commit('GET_POSTS_SUCCESS', data);
};

const getPhotos = async context => {
  const { data } = await httpService.get(API_URL.PHOTOS);
  context.commit('GET_PHOTOS_SUCCESS', data);
};

const setSelectedEmail = (context, email) => {
  context.commit('SELECTED_EMAIL', email);
};

const resetState = context => {
  context.commit('RESET_STATE');
};

export default {
  incrementCounter,
  getPosts,
  getPhotos,
  resetState,
  setSelectedEmail
};
