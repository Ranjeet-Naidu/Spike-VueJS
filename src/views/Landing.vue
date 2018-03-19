<template>
  <div class="app-landing">
    <img :src="imageUrl">
    <h1>{{ landingText }}</h1>
    <div>{{ value }}</div>
    <div>
      <span>Local methods </span>
      {{ valueTwo }}
    </div>
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
      value: [1, 2, 3, ...others],
      valueTwo: 0
    };
  },
  methods: {
    async getValue() {
      return 123;
    },
    async setValue() {
      this.valueTwo = await this.getValue();
    }
  },
  created() {
    this.setValue();
  }
};
</script>

<style lang="sass" scoped>
  .app-landing {
    margin-top: 30px;

    img {
      width: 300px;
    }
  }
</style>

