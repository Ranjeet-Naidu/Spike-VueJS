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
  created() {
    this.setPackshotData();
  },
  components: {
    'dnd-list': DndList
  },
  methods: {
    ddEvents(evt) {
      switch (evt.type) {
        case 'onSelected':
          this.onSelection(evt);
          break;
        case 'onStart':
          this.onDndStartAndStop(evt);
          break;
        case 'onEnd':
          this.onDndStartAndStop(evt);
          break;
        case 'onUpdate':
          this.onUpdate(evt);
          break;
        default:
          console.log(evt);
      }
    },
    ...mapActions({
      setPackshotData: 'dragAndDrop/setPackshotData',
      onSelection: 'dragAndDrop/onSelection',
      onDndStartAndStop: 'dragAndDrop/onDndStartAndStop',
      onUpdate: 'dragAndDrop/onUpdate'
    })
  },
  computed: {
    ...mapGetters({
      packshotsData: 'dragAndDrop/getPackshotData'
    })
  },
  watch: {
    packshotsData() {
      console.log('chnages');
    }
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
    maring-top: 30px;
  }
</style>

