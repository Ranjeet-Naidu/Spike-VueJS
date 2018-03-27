<template>
  <div v-show="!data.isHidden" class="packshot" @click="onSelected(data.src)">
    <div class="packshot--cointainer">
      <img :src="data.src" height="94" width="64"/>
      <v-icon v-if="data.isSelected"  class="packshot--selected-icon" color="blue">check_circle</v-icon>
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
    width: 64px;
    height: 94px;
    margin: 4px;
    &--cointainer {
      position: relative;
    }
    &--selected-icon {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
</style>

