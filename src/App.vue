<template>
  <div id="app">
    <img src="./assets/test.png">
    <h1>{{ msg }}</h1>
    {{ value }}
  </div>
</template>

<script>
const others = [4, 5, 6];

export default {
  name: "app",
  data: () => {
    return {
      msg: "Hello Vue",
      value: [1, 2, 3, ...others]
    };
  }
};
</script>

<style rel="stylesheet/less" lang="less" type="text/less">
@color: #42b983;
#app {
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
    color: @color;
  }

  img {
    width: 20px;
  }
}
</style>

