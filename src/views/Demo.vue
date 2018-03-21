<template>
  <div class="demo">
    <div class="demo__counter-container">
      <v-btn v-on:click="incrementCounter(counter)" color="info">Increment counter: {{ counter }}</v-btn>
      <v-btn v-if="paramType === 'posts'" v-on:click="getPosts()" color="info">Get Posts</v-btn>
      <v-btn v-if="paramType === 'photos'" v-on:click="getPhotos()" color="info">Get Photos</v-btn>
    </div>

    <post-list v-if="posts" v-bind="{ posts, getPostId }"></post-list>
    <photo-list v-if="photos" v-bind="{ photos }"></photo-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import PostList from '../components/PostList.vue';
import PhotoList from '../components/PhotoList.vue';

export default {
  app: 'Demo',
  components: {
    'post-list': PostList,
    'photo-list': PhotoList
  },
  data: () => {
    return {
      paramType: ''
    };
  },
  watch: {
    $route: 'fetchData'
  },
  mounted() {
    this.resetState();
    this.paramType = this.$route.params.type;
  },
  methods: {
    fetchData: function() {
      this.resetState();
      this.paramType = this.$route.params.type;
    },
    getPostId: function() {
      console.log('getPostId');
    },
    ...mapActions({
      incrementCounter: 'demo/incrementCounter',
      getPosts: 'demo/getPosts',
      getPhotos: 'demo/getPhotos',
      resetState: 'demo/resetState'
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

