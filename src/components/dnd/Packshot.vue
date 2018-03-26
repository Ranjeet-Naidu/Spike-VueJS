<template>
  <div class="packshot" @click="onSelected(data.src)">
    <pre>{{data.isSelected}}</pre>
    <div v-bind:class="{ 'packshot--selected': data.isSelected }">
      <img :src="data.src" height="94" width="64"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    onSelected: {
      type: Function,
      required: false
    }
  }
};
</script>

<style lang="sass" scoped>
  .packshot{
    &--selected {
      opacity: 0.5;
    }
  }
</style>

