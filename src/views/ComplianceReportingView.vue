<template>
    <div class="flex flex-col lg:flex-row items-center lg:items-start justify-between">
  <PageTitle
    title="Compliance Reporting & Insights"
    subtitle="Generate Report"
    class="mt-6 lg:mt-0"
  />
  <div class="flex gap-6">
  <Button
    text="Export as PDF"
    backgroundColor="bg-primary-color"
    textColor="text-bold-color"
    custom-classes="px-4 py-3"
  />
  <Button
    text="Export as Excel"
    backgroundColor="bg-primary-color"
    textColor="text-bold-color"
    custom-classes="px-4 py-3"
  />
</div>
</div>
<ComplianceReportGeneration />
<AnalyticsOverview />
<IncidentGraph
    IncidentGraphTitle="Product Trend Analysis"
    :incidentData="incidentData"
    :incidentChartOptions="incidentChartOptions"
  />
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import PageTitle from '@/components/global/PageTitle.vue';
import Button from '@/components/global/Button.vue';
import ComplianceReportGeneration from '@/components/ComplianceReporting/ComplianceReportGeneration.vue';
import AnalyticsOverview from '@/components/ComplianceReporting/AnalyticsOverview.vue';
import IncidentGraph from '@/components/Dashboard/IncidentGraph.vue';


const incidentData = ref({
  monthly: [
    { name: "January", data: [5, 15, 10, 20, 25] },
    { name: "February", data: [10, 20, 15, 10, 30] },
    { name: "March", data: [20, 25, 35, 10, 15] },
    { name: "April", data: [30, 20, 10, 15, 5] },
    { name: "May", data: [25, 15, 20, 10, 5] },
    { name: "June", data: [15, 10, 5, 25, 10] },
    { name: "July", data: [10, 20, 15, 5, 30] },
    { name: "August", data: [20, 30, 25, 15, 20] },
    { name: "September", data: [15, 10, 30, 20, 25] },
    { name: "October", data: [25, 15, 20, 10, 5] },
    { name: "November", data: [10, 20, 15, 30, 10] },
    { name: "December", data: [5, 25, 20, 15, 10] },
  ],
  weekly: [
    { name: "January", data: [3, 10, 5, 10, 12] },
    { name: "February", data: [6, 12, 8, 15, 7] },
    { name: "March", data: [9, 14, 11, 18, 12] },
    { name: "April", data: [12, 10, 8, 6, 4] },
    { name: "May", data: [10, 7, 6, 12, 8] },
    { name: "June", data: [7, 5, 3, 15, 6] },
    { name: "July", data: [6, 10, 7, 5, 12] },
    { name: "August", data: [12, 15, 13, 8, 10] },
    { name: "September", data: [8, 5, 15, 10, 12] },
    { name: "October", data: [10, 7, 8, 5, 3] },
    { name: "November", data: [5, 12, 10, 15, 5] },
    { name: "December", data: [3, 10, 8, 12, 6] },
  ],
  daily: [
    { name: "January", data: [1, 5, 3, 4, 6] },
    { name: "February", data: [2, 6, 4, 7, 3] },
    { name: "March", data: [4, 7, 5, 8, 6] },
    { name: "April", data: [6, 5, 3, 2, 1] },
    { name: "May", data: [5, 3, 2, 6, 4] },
    { name: "June", data: [3, 2, 1, 7, 3] },
    { name: "July", data: [2, 4, 3, 2, 6] },
    { name: "August", data: [6, 7, 6, 4, 5] },
    { name: "September", data: [4, 3, 7, 5, 6] },
    { name: "October", data: [5, 3, 4, 2, 1] },
    { name: "November", data: [2, 6, 5, 7, 2] },
    { name: "December", data: [1, 5, 4, 6, 3] },
  ],
});

const incidentChartOptions = ref({
  chart: {
    type: "bar",
    stacked: true,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "60%",
      borderRadius: 8,
    },
  },
  xaxis: {
    categories: [
      "Product 1",
      "Product 2",
      "Product 3",
      "Product 4",
      "Product 5",
    ],
  },
  fill: {
    opacity: 1,
    colors: [
      "#C84277",
      "#EC8832",
      "#FFC20F",
      "#5954A4",
      "#3EA681",
      "#22B8B7",
      "#E2E246",
      "#418BC8",
      "#3EA681",
      "#22B8B7",
      "#EC8832",
      "#FFC20F",
    ],
  },
  legend: {
    position: "right",
    horizontalAlign: "center",
    offsetY: 0,
    itemMargin: { vertical: 12 },
  },
  dataLabels: { enabled: false },
  tooltip: { shared: true, intersect: false },
});

const screenWidth = ref(window.innerWidth);

const updateLegendPosition = () => {
  if (screenWidth.value < 768) {
    incidentChartOptions.value.legend.position = "bottom";
    incidentChartOptions.value.legend.horizontalAlign = "center";
  } else {
    incidentChartOptions.value.legend.position = "right";
    incidentChartOptions.value.legend.horizontalAlign = "center";
  }
};

watch(screenWidth, updateLegendPosition);

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
  updateLegendPosition();
});

</script>