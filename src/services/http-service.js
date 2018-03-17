import axios from 'axios';

const httpService = {
  async get(url) {
    return axios.get(url);
  }
};

export default httpService;
