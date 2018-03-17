<template>
  <div class="app">
    <app-header :prop-header-title=headerTitle>
      <span slot="headerSubTitle">Sub title</span>
    </app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    "app-header": AppHeader
  },
  data: () => {
    return {
      headerTitle: "Header Title"
    };
  }
};
</script>

<style rel="stylesheet/less" lang="scss" type="text/scss">
$color: #42b983;
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: $color;
  }
  img {
    width: 20px;
  }
}
</style>
