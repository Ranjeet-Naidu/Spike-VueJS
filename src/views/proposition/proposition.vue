<template>
  <div class="proposition">
    <div>{{loadingText}}</div>
    <div v-for="(propData, index) of propsData" :key="index">
      <proposition-container v-if="propData.proposition && propData.coreStatus" :propData="propData" ></proposition-container>
    </div>
  </div>
</template>

<script>
import * as propositionData from "./__mocks__/proposition-data.json";
import axios from "axios";
import PropositionContainer from './components/proposition-container';

export default {
  app: 'Proposition',
  components: {
    'proposition-container': PropositionContainer
  },
  props: {},
  data: () => ({
    loadingText: "Loading Data",
    propsData: propositionData
  }),
  async created() {
    try {
      const response = await axios.get("/monitoring/propositions");
      // this.propsData = response.data; // TODO:UNCOMMENT
      this.loadingText = "";
    } catch (e) {
      console.error("failed loading data ", e);
      this.loadingText = "Failed to load proposition data";
    }
  },
  methods: {
    stringify: JSON.stringify,
    triggerHeartbeat: (productCode, territory) => {
      console.log(productCode, territory);
    }
  }
};
</script>

<style>
  .proposition {
    font-family:Helvetica,  Arial, sans-serif;
    color: #424242;
  }

  h3 {
    font-size: 24px;
  }
</style>
