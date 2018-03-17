<template>
  <div class="app-header">
    <h1>{{ propHeaderTitle }}</h1>
    <slot name="headerSubTitle"></slot>
    <router-link to="/">Home</router-link>
    <router-link to="/demo">Demo</router-link>
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
  }
</style>

