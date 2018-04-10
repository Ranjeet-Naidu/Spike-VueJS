<template>
<div>
  <div>
    <select-ele v-bind="{ formItem, ssEvents }" v-model="formData"></select-ele>
  </div>
  <div class="dnd">
    <dnd-list
      v-for="(packshotData, index) in packshotsData"
      :key="index"
      v-bind="{ packshotData, ddEvents }">
    </dnd-list>
  </div>
</div>
</template>

<script>
import DndList from '../components/dnd/DndList';
import Select from '../components/form-elements/Select';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      formData: {
        Images: null
      }
    };
  },
  mounted() {
    this.setPackshotData(this.initialSelection);
    this.formData.Images = this.initialSelection;
  },
  components: {
    'dnd-list': DndList,
    'select-ele': Select
  },
  methods: {
    async ssEvents() {
      this.setSetFormData(this.formData.Images);
    },
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
        case 'onAdd':
          this.onAdd(evt);
          break;
        case 'onRemove':
          this.onRemove(evt);
          break;
        default:
          // do nothing
      }
    },
    ...mapActions({
      setSetFormData: 'dragAndDrop/setSetFormData',
      setPackshotData: 'dragAndDrop/setPackshotData',
      onSelection: 'dragAndDrop/onSelection',
      onDndStartAndStop: 'dragAndDrop/onDndStartAndStop',
      onUpdate: 'dragAndDrop/onUpdate',
      onAdd: 'dragAndDrop/onAdd',
      onRemove: 'dragAndDrop/onRemove'
    })
  },
  computed: {
    ...mapGetters({
      formItem: 'dragAndDrop/getFormItem',
      initialSelection: 'dragAndDrop/getInitialSelection',
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
    maring-top: 30px;
  }
</style>

