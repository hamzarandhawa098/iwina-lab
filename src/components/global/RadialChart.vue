<template>
  <div class="flex flex-col">
    <div class="relative w-[275px] h-[275px]">
      <canvas ref="chart"></canvas>
      <div class="absolute inset-0 flex items-center justify-center">
        <img :src="Logo" alt="" />
      </div>
    </div>
    <div class="flex mt-6 space-x-6">
      <div
        v-for="legend in chartLegends"
        :key="legend.label"
        class="flex items-center space-x-2"
      >
        <span
          class="w-3 h-3 rounded-[4px]"
          :style="{ backgroundColor: legend.color }"
        ></span>
        <p
          class="font-nunito font-mediumBold text-[12px] leading-[18px] text-light-color"
        >
          {{ legend.label }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { Chart, registerables } from "chart.js";
import Logo from "@/assets/images/Logo.png";

Chart.register(...registerables);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  createChart: {
    type: Function,
    required: true,
  },
  updateChart: {
    type: Function,
    required: true,
  },
  chartInstance: {
    type: Object,
    required: true,
  },
  chartLegends: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(
        (item) =>
          typeof item.label === "string" && typeof item.color === "string"
      );
    },
  },
});

const chart = ref(null);

onMounted(() => {
  nextTick(() => {
    const ctx = chart.value.getContext("2d");
    props.createChart(ctx);
  });
});

watch(() => props.data, () => {
  props.updateChart();
});
</script>

<style scoped>

</style>
