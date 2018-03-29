<template>
  <div>
    <ul class="dnd--container">
      <draggable
        :id="packshotData.name"
        v-model='draggableModel'
        @start="onStart"
        @end="onEnd"
        @add="onAdd"
        @remove="onRemove"
        @update="onUpdate"
        :options="{ group:'pack' }">
          <li v-for="packshot of packshotData.packshots" :key="packshot.src">
            <packshot-comp v-bind="{ packshot, onSelected  }"></packshot-comp>
          </li>
      </draggable>
    </ul>
  </div>
</template>

<script>
import Packshot from './Packshot';
import draggable from 'vuedraggable';

export default {
  created() {
    this.draggableModel = this.packshotData.packshots;
  },
  data() {
    return {};
  },
  components: {
    draggable,
    'packshot-comp': Packshot
  },
  props: {
    packshotData: {
      type: Object,
      required: true
    },
    ddEvents: {
      type: Function,
      required: false
    }
  },
  methods: {
    onStart(evt) {
      this.ddEvents({
        // called when dragging started
        name: this.packshotData.name,
        type: 'onStart',
        data: evt
      });
    },
    onEnd(evt) {
      this.ddEvents({
        // called when dragging ended
        name: this.packshotData.name,
        type: 'onEnd',
        data: evt
      });
    },
    onAdd(evt) {
      this.ddEvents({
        // called when item added from another list
        // add newIndex/ remove oldIndex
        name: this.packshotData.name,
        type: 'onAdd',
        data: evt
      });
    },
    onRemove(evt) {
      this.ddEvents({
        // called when item added from another list
        // add newIndex/ remove oldIndex
        name: this.packshotData.name,
        type: 'onRemove',
        data: evt
      });
    },
    onUpdate(evt) {
      // called when change within the same list
      // swap places newIndex/ oldIndex
      this.ddEvents({
        name: this.packshotData.name,
        type: 'onUpdate',
        data: evt
      });
    },
    onSelected(evt) {
      this.ddEvents({
        name: this.packshotData.name,
        type: 'onSelected',
        data: evt
      });
    }
  },
  watch: {
    'packshotData.packshots'(newVal) {
      this.draggableModel = newVal;
    }
  }
};
</script>

<style lang="sass" scoped>
  .dnd--container {
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: 450px;

    li {
      float: left;
    }

    .sortable-ghost {
      opacity: 0;
    }
  }
</style>
