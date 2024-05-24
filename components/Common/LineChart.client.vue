<template>
  <div class="chart">
    <apexchart
      type="area"
      height="388"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  chartOptions: {
    type: Object,
    required: true,
  },
  series: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.chart {
  height: 445px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: none;
  border: 1px solid $muted-color;
  background-color: $white;
}
</style>
