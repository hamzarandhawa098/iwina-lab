<template>
  <PageTitle
    title="Dashboard"
    subtitle="Welcome, Arslan Zubair!"
    class="mt-6 lg:mt-0"
  />
  <div class="grid grid-cols-2 mt-[24px] xl:grid-cols-4 lg:gap-6 gap-4">
    <Scores v-for="(score, index) in scroesData" :key="index" :score="score" />
  </div>
  <div class="flex flex-col xl:flex-row justify-between mt-6 gap-6">
    <OrdersCompleted
      :OrderCompletedTitle="'Orders Completed'"
    />
    <TrainingModule
      TrainigModulesTitle="Upcoming Training Module"
      :TrainigModulesData="TrainigModulesData"
      TrainigModulesButtonText="Show More"
    />
  </div>
  <div class="flex flex-col lg:flex-row mt-6 gap-6">
    <ComplianceOverview
      ComplianceOverviewTitle="Compliance Overview"
      :chartData="chartData"
      :createChart="createChart"
      :updateChart="updateChart"
      :chartInstance="chartInstance"
      :chartLegends="chartLegends"
    />
    <Compliance 
    />
  </div>
  <IncidentGraph
    IncidentGraphTitle="Top 5 Incidents By Product Group"
    :incidentData="incidentData"
    :incidentChartOptions="incidentChartOptions"
  />
  <BuyersMap />
  <BuyersList />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Scores from "@/components/Dashboard/Scores.vue";
import DollarIcon from "@/components/icons/DollarIcon.vue";
import OrdersCompleted from "@/components/Dashboard/OrdersCompleted.vue";
import TrainingModule from "@/components/Dashboard/TrainingModule.vue";
import TrainingModuleImg1 from "@/assets/images/TrainingModuleImg1.png";
import TrainingModuleImg2 from "@/assets/images/TrainingModuleImg2.png";
import TrainingModuleImg3 from "@/assets/images/TrainingModuleImg3.png";
import ComplianceOverview from "@/components/Dashboard/ComplianceOverview.vue";
import Compliance from "@/components/Dashboard/Compliance.vue";
import IncidentGraph from "@/components/Dashboard/IncidentGraph.vue";
import BuyersList from "@/components/Dashboard/BuyersList.vue";
import BuyersMap from "@/components/Dashboard/BuyersMap.vue";
import { Chart } from "chart.js";

const scroesData = ref([
  { label: "Compliance Score", value: "89.5", icon: DollarIcon },
  { label: "Listed Products", value: "453", icon: DollarIcon },
  { label: "Recent Orders", value: "12", icon: DollarIcon },
  { label: "Training Completion", value: "8 / 10", icon: DollarIcon },
]);

const chartData = ref({
  completed: 45,
  inProgress: 30,
  pending: 25,
});

const chartLegends = ref([
  { label: "Completed", color: "#03D18F" },
  { label: "In-Progress", color: "#4F81F5" },
  { label: "Pending", color: "#FF9F24" },
]);

const chartInstance = ref(null);

function createChart(ctx) {
  const total =
    chartData.value.completed +
    chartData.value.inProgress +
    chartData.value.pending;
  const dataValues = [
    (chartData.value.completed / total) * 100,
    (chartData.value.inProgress / total) * 100,
    (chartData.value.pending / total) * 100,
  ];

  chartInstance.value = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "In-Progress", "Pending"],
      datasets: [
        {
          data: dataValues,
          backgroundColor: ["#03D18F", "#FF9F24", "#4F81F5"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "75%",
      rotation: 360,
      circumference: 270,
      plugins: {
        tooltip: {
          enabled: true,
        },
        legend: {
          display: false,
        },
      },
    },
  });
}

function updateChart() {
  if (chartInstance.value) {
    const total =
      chartData.value.completed +
      chartData.value.inProgress +
      chartData.value.pending;
    chartInstance.value.data.datasets[0].data = [
      (chartData.value.completed / total) * 100,
      (chartData.value.inProgress / total) * 100,
      (chartData.value.pending / total) * 100,
    ];
    chartInstance.value.update();
  }
}

const TrainigModulesData = ref([
  {
    id: 1,
    title: "How to Export",
    lessons: "12 lessons",
    image: TrainingModuleImg1,
  },
  {
    id: 2,
    title: "Quality Checking",
    lessons: "6 lessons",
    image: TrainingModuleImg2,
  },
  {
    id: 3,
    title: "Best way to form",
    lessons: "23 lessons",
    image: TrainingModuleImg3,
  },
]);

const incidentData = ref({
  monthly: [
    { name: "Bad Label", data: [20, 0, 0, 15, 25] },
    { name: "Piece Size", data: [0, 20, 10, 15, 0] },
    { name: "Off Flavor", data: [15, 10, 30, 0, 0] },
    { name: "Mold", data: [0, 0, 20, 0, 40] },
    { name: "Foreign Object", data: [10, 0, 20, 5, 5] },
    { name: "Off Odor", data: [0, 20, 0, 0, 0] },
    { name: "Off Color", data: [5, 0, 10, 10, 0] },
    { name: "Other", data: [0, 10, 10, 5, 0] },
  ],
  weekly: [
    { name: "Bad Label", data: [15, 10, 5, 10, 10] },
    { name: "Piece Size", data: [0, 10, 20, 10, 5] },
    { name: "Off Flavor", data: [25, 20, 15, 30, 5] },
    { name: "Mold", data: [5, 0, 10, 10, 10] },
    { name: "Foreign Object", data: [0, 10, 10, 5, 5] },
    { name: "Off Odor", data: [10, 5, 0, 0, 0] },
    { name: "Off Color", data: [5, 15, 5, 5, 0] },
    { name: "Other", data: [5, 10, 5, 0, 0] },
  ],
  daily: [
    { name: "Bad Label", data: [0, 10, 5, 5, 15] },
    { name: "Piece Size", data: [5, 5, 10, 15, 5] },
    { name: "Off Flavor", data: [10, 5, 15, 20, 10] },
    { name: "Mold", data: [15, 10, 5, 0, 0] },
    { name: "Foreign Object", data: [0, 5, 0, 5, 0] },
    { name: "Off Odor", data: [10, 5, 0, 0, 5] },
    { name: "Off Color", data: [5, 5, 5, 10, 0] },
    { name: "Other", data: [0, 5, 5, 10, 5] },
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
    categories: ["Bulk", "Meat", "Prepared Food", "Produce", "Seafood"],
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
