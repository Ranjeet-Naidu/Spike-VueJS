<template>
  <router-view fill-height></router-view>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    'app-navigation': AppNavigation
  },
  data: () => {
    return {
      drawer: false
    };
  },
  computed: {
    ...mapGetters({
      navData: 'navigation/navData'
    })
  }
};
</script>

<style rel="stylesheet/less" lang="scss" type="text/scss">
$color: #42b983;

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
