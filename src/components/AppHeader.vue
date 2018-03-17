<template>
  <div class="app-header">
    <h1>{{ propHeaderTitle }}</h1>
    <slot name="headerSubTitle"></slot>
    <a href="/">Home</a>
    <a href="/demo">Demo</a>
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

