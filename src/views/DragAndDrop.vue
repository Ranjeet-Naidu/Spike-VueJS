<template>
<div class="dnd">
  <dnd-list
    v-for="(packshotData, index) in packshotsData"
    :key="index"
    v-bind="{ packshotData, ddEvents }">
  </dnd-list>
</div>
</template>

<script>
import DndList from '../components/dnd/DndList';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  components: {
    'dnd-list': DndList
  },
  methods: {
    ddEvents(evt) {
      switch (evt.type) {
        case 'onSelected':
          this.onSelection(evt);
          break;
        default:
          console.log(evt);
      }
    },
    ...mapActions({
      onSelection: 'dragAndDrop/onSelection'
    })
  },
  computed: {
    ...mapGetters({
      packshotsData: 'dragAndDrop/getPackshotData'
    })
  }
};
</script>

<style lang="sass" scoped>
  .dnd {
    display: flex;
    background: #333;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%;
  }
</style>

