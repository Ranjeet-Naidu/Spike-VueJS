<template>
  <div>
    <ul v-if="postData && postData.data">
      <li v-for="post of postData.data" :key="post.id">{{ post.id }}</li>
    </ul>
  </div>
</template>

<script>
import httpService from '../services/http-service';
import { API_URL } from '../constants/api-url';

export default {
  app: 'Demo',
  data: () => {
    return {
      postData: null
    };
  },
  methods: {
    async getPostData() {
      this.postData = await httpService.get(API_URL.POSTS);
    }
  },
  created() {
    this.getPostData();
  }
};
</script>

<style>

</style>
