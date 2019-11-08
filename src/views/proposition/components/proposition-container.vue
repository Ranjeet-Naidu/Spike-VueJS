<template>
  <div class="pc">
    <div class="pc__header">
      <h3 class="pc__header--title">{{ propData.proposition.productCode }}-{{ propData.proposition.territory }}</h3>
      <button class="pc__header--button" v-on:click="triggerHeartbeat(propData.proposition.productCode, propData.proposition.territory)">Trigger Heartbeat</button>
    </div>
    <div class="pic">
      <div class="pic__sub-container pic__primary">
        <card :cardData="propData.coreStatus"></card>
      </div>
      <div class="pic__sub-container pic__secondary">
        <div class="pic__secondary--sub-container pic__secondary--front-end">
          <div v-for="(frontendAppStatus, index) of propData.frontendAppsStatus" :key="index">
            <card :cardData="frontendAppStatus"></card>
          </div>
        </div>
        <div class="pic__secondary--sub-container pic__secondary--preview">
          <div v-for="(previewAppStatus, index) of propData.previewAppsStatus" :key="index">
            <card :cardData="previewAppStatus"></card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./proposition-card";

export default {
  app: "Proposition container",
  components: {
    card: Card
  },
  props: {
    propData: {
      type: Object,
      required: true
    },
    triggerHeartbeat: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
.pc {
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px 0;
}

.pc__header {
  display: flex;
  align-items: center;
}

.pc__header--button {
  display: block;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #1976d2;
  color: #ecf0f1;
  padding: 10px;
  transition: background-color 0.3s;
}

.pc__header--button:hover {
  background-color: #539be4;
}

.pic {
  display: flex;
  justify-content: flex-start;
  margin: 20px 0px;
}

.pic__sub-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pic__primary {
  flex-basis: 25%;
  border-color: #dcdcdc;
  border-style: solid;
  border-width: 1px 0px 1px 1px;
  background-color: #e8e8e8;
}

.pic__secondary {
  display: flex;
  flex-basis: 75%;
  flex-direction: column;
  border-color: #dcdcdc;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
}

.pic__secondary--sub-container {
  display: flex;
  padding: 10px 0 10px 10px;
  width: 100%;
}

.pic__secondary--front-end {
  border-bottom: 1px solid #dcdcdc;
  background-color: #dadada;
}
</style>
