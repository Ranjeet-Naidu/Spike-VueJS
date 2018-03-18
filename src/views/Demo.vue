<template>
  <div class="demo">
    <div class="demo__counter-container">
      <button v-on:click="incrementCounter(counter)">Increment counter: {{ counter }}</button>
      <button v-if="paramType === 'posts'" v-on:click="getPosts()">Get Posts</button>
      <button v-if="paramType === 'photos'" v-on:click="getPhotos()">Get Photos</button>
    </div>
    <ul v-if="posts">
      <li v-for="post of posts" :key="post.id">{{ post.id }}</li>
    </ul>
    <ul v-if="photos">
      <li v-for="photo of photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" height="42" width="42"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  app: 'Demo',
  data: () => {
    return {
      paramType: ''
    };
  },
  watch: {
    $route: 'fetchData'
  },
  mounted() {
    this.paramType = this.$route.params.type;
  },
  created() {},
  methods: {
    fetchData: function() {
      this.paramType = this.$route.params.type;
    },
    ...mapActions({
      incrementCounter: 'demo/incrementCounter',
      getPosts: 'demo/getPosts',
      getPhotos: 'demo/getPhotos'
    })
  },
  computed: {
    ...mapGetters({
      counter: 'demo/counter',
      posts: 'demo/posts',
      photos: 'demo/photos'
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

