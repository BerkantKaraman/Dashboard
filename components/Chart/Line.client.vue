<template>
  <div class="chart" :style="{ height: cardHeight }">
    <apexchart
      :height="chartHeight"
      :options="chartOptions"
      :series="chartData"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  chartOptions: {
    type: Object,
    required: true,
  },
  chartData: {
    type: Array,
    required: true,
  },
  chartHeight: {
    type: Number,
    default: 388,
  },
  cardHeight: {
    type: Number,
    default: 445,
  },
});
</script>

<style lang="scss" scoped>
.chart {
  padding: 20px;
  border-radius: 10px;
  box-shadow: none;
  border: 1px solid $muted-color;
  background-color: $white;
}
</style>
