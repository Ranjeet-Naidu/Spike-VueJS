<template>
  <div class="demo">
    <div class="demo__counter-container">
      <button v-on:click="incrementCounter(counter)">Increment counter: {{ counter }}</button>
    </div>
    <ul v-if="postData && postData.data">
      <li v-for="post of postData.data" :key="post.id">{{ post.id }}</li>
    </ul>
  </div>
</template>

<script>
import httpService from '../services/http-service';
import { API_URL } from '../constants/api-url';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  app: 'Demo',
  data: () => {
    return {
      postData: null
    };
  },
  mounted() {
    // this.$store.dispatch('demo/incrementCounter');
  },
  created() {
    this.getPostData();
  },
  methods: {
    ...mapActions({
      incrementCounter: 'demo/incrementCounter'
    }),
    async getPostData() {
      this.postData = await httpService.get(API_URL.POSTS);
    }
  },
  computed: {
    ...mapGetters({
      counter: 'demo/counter'
    })
  }
};
</script>

<style lang="sass" scoped>
  .demo {
    &__counter-container {
      margin-top: 30px;

      & button {
        font-size: 13px;
      }
    }
  }
</style>

