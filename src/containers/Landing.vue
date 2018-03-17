<template>
  <div class="app-landing">
    <div>Home Page</div>
    <img :src="imageUrl">
    <h1>{{ landingText }}</h1>
    {{ value }}
  </div>
</template>

<script>
import imageUrl from '../assets/test.png';

const others = [4, 5, 6];

export default {
  app: 'Home',
  data: () => {
    return {
      imageUrl,
      landingText: 'Hello Vue',
      value: [1, 2, 3, ...others]
    };
  }
};
</script>

<style lang="sass" scoped>
  .app-landing {
    margin-top: 30px;
    background-color: #EEEEEE;

    img {
      width: 100px;
    }
  }
</style>

