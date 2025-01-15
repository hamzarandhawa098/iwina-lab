<template>
  <div
    class="max-w-[351px] w-full bg-white border py-6 border-border-color shadow rounded-[12px]"
  >
    <div class="flex justify-between items-center px-6">
      <h2
        class="text-[20px] font-nunito font-bold leading-7 text-title-color"
        v-html="ComplianceOverviewTitle"
      ></h2>
      <Button
        v-if="!isDashboard"
        text="View All"
        backgroundColor="bg-primary-color"
        textColor="text-bold-color"
        custom-classes="px-4 py-3"
      />
    </div>
    <div class="flex justify-center items-center mt-6">
      <RadialChart
        :data="chartData"
        :createChart="createChart"
        :updateChart="updateChart"
        :chartInstance="chartInstance"
        :chartLegends="chartLegends"
      />
    </div>
  </div>
</template>

<script setup>
import RadialChart from "@/components/global/RadialChart.vue";
import { Chart, registerables } from "chart.js";
import { computed } from "vue";
import { useRoute } from "vue-router";
import Button from "@/components/global/Button.vue";
const route = useRoute();
const isDashboard = computed(() => route.path === "/dashboard");

Chart.register(...registerables);

defineProps({
  ComplianceOverviewTitle: String,
  chartData: Object,
  createChart: Function,
  updateChart: Function,
  chartInstance: Object,
  chartLegends: Array,
});
</script>
