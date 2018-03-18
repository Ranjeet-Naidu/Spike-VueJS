<template>
  <div class="app-header">
    <h1>{{ propHeaderTitle }}</h1>
    <slot name="headerSubTitle"></slot>
    <div class="app-header__navigation">
      <span>
        <router-link to="/">Home</router-link>
      </span>
      <span>
        <router-link to="/demo/posts">Demo posts</router-link>
      </span>
      <span>
        <router-link to="/demo/photos">Demo photos</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prop-header-title']
};
</script>

<style lang="sass" scoped>
  .app-header {
    h1 {
      font-size: 20px;
    }

    &__navigation {
      margin-top: 20px;

      span {
        padding: 10px;
      }
    }
  }
</style>

