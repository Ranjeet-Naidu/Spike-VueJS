<template>
  <div>
    <ul class="dnd--container">
      <draggable
        v-model="packshotData.packshots"
        @add="onAdd"
        @update="onUpdate"
        :options="{ group:'pack' }">
          <pre>{{getPackshotData.packshots}}</pre>
          <li v-for="packshot of packshotData.packshots" :key="packshot.src">
            <packshot v-bind="{ data: packshot, onSelected  }"></packshot>
          </li>
      </draggable>
    </ul>
  </div>
</template>

<script>
import Packshot from './Packshot';
import draggable from 'vuedraggable';

export default {
  data() {
    return {};
  },
  components: {
    draggable,
    packshot: Packshot
  },
  computed: {
    getPackshotData() {
      return this.packshotData;
    }
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
    onAdd(evt) {
      this.ddEvents({
        // called when item added from another list
        // add newIndex/ remove oldIndex
        name: this.packshotData.name,
        type: 'onAdd',
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
      width: 64px;
      height: 94px;
      float: left;
      margin: 4px;
    }

    .sortable-ghost {
      opacity: 0;
    }
  }
</style>
