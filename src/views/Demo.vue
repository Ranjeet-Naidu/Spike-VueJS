<template>
  <div class="demo">
    <div class="demo__counter-container">
      <button v-on:click="incrementCounter(counter)">Increment counter: {{ counter }}</button>
      <button v-on:click="getPosts()">Get Posts</button>
    </div>
    <ul v-if="posts">
      <li v-for="post of posts" :key="post.id">{{ post.id }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  app: 'Demo',
  data: () => {
    return {};
  },
  mounted() {},
  created() {},
  methods: {
    ...mapActions({
      incrementCounter: 'demo/incrementCounter',
      getPosts: 'demo/getPosts'
    })
  },
  computed: {
    ...mapGetters({
      counter: 'demo/counter',
      posts: 'demo/posts'
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

