<template>
  <div id="chart">
    <VueApexCharts
      type="bar"
      :width="chartWidth"
      :height="chartHeight"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import { computed } from "vue";

defineProps({
  series: {
    type: Array,
    required: true,
  },
  chartOptions: {
    type: Object,
    required: true,
  },
});

const chartHeight = computed(() => {
  const categoriesCount = 5; 
  const barHeight = 80; 
  return categoriesCount * barHeight;
});

const chartWidth = computed(() => {
  return window.innerWidth < 600 ? '100%' : '1080px';
});
</script>

<style>
#chart {
  padding: 10px;
}
</style>
