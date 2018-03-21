<template>
  <div class="demo">
    <div class="demo__counter-container">
      <v-btn v-on:click="incrementCounter(counter)" color="info">Increment counter: {{ counter }}</v-btn>
      <v-btn v-if="paramType === 'posts'" v-on:click="getPosts()" color="info">Get Posts</v-btn>
      <v-btn v-if="paramType === 'photos'" v-on:click="getPhotos()" color="info">Get Photos</v-btn>
    </div>

    <v-alert v-if="selectedEmail" type="success" :value="true">
      {{ selectedEmail }}
    </v-alert>

    <post-list v-if="posts" v-bind="{ posts, getPostEmail }"></post-list>
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
    '$route.params.type': function(type) {
      this.resetAndSetParamType(type);
    }
  },
  created() {
    this.paramType = this.$route.params.type;
  },
  destroyed() {
    this.resetState();
  },
  methods: {
    resetAndSetParamType: function(type) {
      this.resetState();
      this.paramType = type;
    },
    ...mapActions({
      incrementCounter: 'demo/incrementCounter',
      getPosts: 'demo/getPosts',
      getPhotos: 'demo/getPhotos',
      resetState: 'demo/resetState',
      getPostEmail: 'demo/setSelectedEmail'
    })
  },
  computed: {
    ...mapGetters({
      counter: 'demo/counter',
      posts: 'demo/posts',
      photos: 'demo/photos',
      selectedEmail: 'demo/selectedEmail'
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
    &__selected-email {
      background-color: #EEE;
      padding: 10px;
    }
  }
</style>

