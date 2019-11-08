<template>
  <div class="card" :class="['status-' + cardData.status]">
    <div class="card__title">{{ cardData.app }}</div>
    <div class="card__variant">{{ cardData.variant }}</div>
    <div class="card__description">
      <div>Status : {{ cardData.status }}</div>
      <div>Version : {{ cardData.heartbeatNode.version }}</div>
      <div>Date : {{ cardData.heartbeatNode.dateStr }}</div>
      <div>Time : {{ cardData.heartbeatNode.timeStr }}</div>
    </div>
  </div>
</template>

<script>
export default {
  app: "Card",
  props: {
    cardData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #ffffff;
  background-color: #dadada;
  margin-right: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.status-OK {
  background: #006400;
}

.status-KO {
  background: #c08526;
}

.status-DOWN {
  background: #8b0000;
}

.card__title {
  font-size: 0.9rem;
  margin-bottom: 2px;
  text-align: center;
  font-weight: bold;
}

.card__variant {
  font-size: 0.8rem;
  margin-bottom: 3px;
  text-align: center;
  font-weight: bold;
}

.card__description {
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 14px;
  margin-left: 7px;
}

.card__description div {
  white-space: pre-wrap;
  font-family: monospace;
}
</style>
