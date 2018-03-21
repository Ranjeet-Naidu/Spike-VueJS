<template>
  <div>
    <ul class="photo-list">
      <li v-for="photo of photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" height="42" width="42"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
    .photo-list {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        width: 42px;
        height: 42px;
        float: left;
        margin: 1px;
      }
    }
</style>

