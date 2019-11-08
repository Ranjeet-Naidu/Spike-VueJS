<template>
  <div class="proposition">
    <div>{{loadingText}}</div>
    <div class="refresh-counter">Updating in {{Math.abs(intervalCounter - 11)}} seconds</div>
    <div v-for="(propData, index) of propsData" :key="index">
      <proposition-container
        v-if="propData.proposition && propData.coreStatus"
        v-bind="{propData,triggerHeartbeat}"
      ></proposition-container>
    </div>
  </div>
</template>

<script>
import * as propositionData from './__mocks__/proposition-data.json';
import axios from 'axios';
import PropositionContainer from './components/proposition-container';

export default {
  app: 'Proposition',
  components: {
    'proposition-container': PropositionContainer
  },
  props: {},
  data: () => ({
    loadingText: 'Loading Data',
    propsData: propositionData,
    intervalSeconds: 10,
    intervalCounter: 1,
    interval: null
  }),
  created() {
    clearInterval(this.interval);
    this.loadData();
    this.loadOnInterval();
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    async loadData() {
      console.log('this.loadData();');
      try {
        const response = await axios.get('/monitoring/propositions');
        // this.propsData = response.data; // TODO:UNCOMMENT
        this.loadingText = '';
      } catch (e) {
        console.error('Failed to load proposition data ', e);
        this.loadingText = 'Failed to load proposition data';
      }
    },
    async triggerHeartbeat(productCode, territory) {
      clearInterval(this.interval);
      this.intervalCounter = 0;
      try {
        await axios.get(`monitoring/proposition/heartbeat/${productCode}/${territory}`);
        this.loadData();
        this.loadOnInterval();
      } catch (e) {
        console.error('Failed to trigger heart beat ', e);
        this.loadingText = 'Failed to trigger heart beat';
      };
    },
    loadOnInterval() {
      this.interval = setInterval(() => {
        if (this.intervalCounter === this.intervalSeconds) {
          this.loadData();
          this.intervalCounter = 0;
        }

        this.intervalCounter++;
      }, 1000);
    }
  }
};
</script>

<style>
.proposition {
  font-family: Helvetica, Arial, sans-serif;
  color: #676767;
}

.refresh-counter {
  font-size: 0.8rem;
  text-align: right;
  padding: 10px;
}

h3 {
  font-size: 1.5rem;
}
</style>
