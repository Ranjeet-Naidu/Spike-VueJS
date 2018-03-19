<template>
  <div class="demo">
    <div class="demo__counter-container">
      <v-btn v-on:click="incrementCounter(counter)" color="info">Increment counter: {{ counter }}</v-btn>
      <v-btn v-if="paramType === 'posts'" v-on:click="getPosts()" color="info">Get Posts</v-btn>
      <v-btn v-if="paramType === 'photos'" v-on:click="getPhotos()" color="info">Get Photos</v-btn>
    </div>

    <v-flex xs12 v-if="posts" v-for="post of posts" :key="post.id">
      <v-card color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div class="headline">{{ post.name }}</div>
          <div>{{ post.body }}</div>
        </v-card-title>
      </v-card>
    </v-flex>

    <ul v-if="photos" class="demo__photos">
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

    &__photos {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        width: 42px;
        height: 42px;
        float: left;
        margin: 1px;
      }
    }
  }
</style>

