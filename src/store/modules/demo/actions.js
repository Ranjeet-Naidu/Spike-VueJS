import httpService from '../../../services/http-service';
import { API_URL } from '../../../constants/api-url';

const incrementCounter = (context, counter) => {
  context.commit('INCREMENT_COUNTER', counter);
};

const getPosts = async context => {
  const { data } = await httpService.get(API_URL.POSTS);
  context.commit('GET_POSTS_SUCCESS', data);
};

export default {
  incrementCounter,
  getPosts
};
