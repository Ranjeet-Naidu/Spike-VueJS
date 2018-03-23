<template>
<div class="vddl-container">
    <vddl-list class="vddl-list" :list="imageLists[0]" :drop="handleDrop">
      <vddl-draggable class="vddl-draggable" v-for="(item, index) in imageLists[0]" :key="item.src"
        :draggable="item"
        :index="index"
        :wrapper="imageLists[0]"
        :moved="handleMoved">
        <img :src="item.src" height="94" width="64"/>
      </vddl-draggable>
    </vddl-list>

    <vddl-list class="vddl-list" :list="imageLists[1]" :drop="handleDrop">
      <vddl-draggable class="vddl-draggable" v-for="(item, index) in imageLists[1]" :key="item.id"
        :draggable="item"
        :index="index"
        :wrapper="imageLists[1]"
        :moved="handleMoved">
        <img :src="item.src" height="94" width="64"/>
      </vddl-draggable>
    </vddl-list>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  created() {},
  data() {
    return {};
  },
  methods: {
    handleMoved({ index }) {
      console.log('handleMoved ', index);
    },
    handleDrop(draggable) {
      console.log('handleDrop ', draggable.index);
    }
  },
  computed: {
    ...mapGetters({
      imageLists: 'dragAndDrop/getImageLists'
    })
  }
};
</script>

<style lang="sass">

</style>

