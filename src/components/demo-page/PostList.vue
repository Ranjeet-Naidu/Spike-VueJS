<template>
  <div>
    <v-flex xs12 v-for="post of posts" :key="post.id">
      <v-card color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div class="headline">{{ post.name }}</div>
          <div>{{ post.body }}</div>
        </v-card-title>
        <v-btn v-on:click="getPostEmail( post.email )" color="info">Get Post email</v-btn>
      </v-card>
    </v-flex>
    </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
    getPostEmail: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>

</style>
