<template>
  <div class="proposition-container">
    <div class="proposition-container__header">
      <h3 class="proposition-container__header--title">{{ propData.proposition.productCode }}-{{ propData.proposition.territory }}</h3>
      <button
        class="proposition-container__header--button"
        v-on:click="triggerHeartbeat(propData.proposition.productCode, propData.proposition.territory)"
      >Trigger Heartbeat</button>
    </div>

    <div class="proposition-container">
      <div class="primary">
        <div class="backend">
          <div class="proposition-app">
            <div class="proposition-app__title">CORE</div>
            <div class="proposition-app__variant">{{ propData.coreStatus.variant }}</div>
            <div class="proposition-app__description">
              <div>Status : {{ propData.coreStatus.status }}</div>
              <div>Version : {{ propData.coreStatus.heartbeatNode.version }}</div>
              <div>Date : {{ propData.coreStatus.heartbeatNode.dateStr }}</div>
              <div>Time : {{ propData.coreStatus.heartbeatNode.timeStr }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propData: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  methods: {}
};
</script>

<style>
.proposition-container__header {
  display: flex;
  align-items: center;
}

.proposition-container__header--button {
  display: block;
  cursor: pointer;
  margin-left: 10px;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  width: 150px;
  border: 1px solid #1c9ab3;
  box-sizing: border-box;
  font-size: 0.8rem;
}

.proposition-container__header--button:hover {
  background-color: #dadada;
}
</style>
