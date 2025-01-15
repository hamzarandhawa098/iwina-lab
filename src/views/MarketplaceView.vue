<template>
  <PageTitle title="Marketplace" />
  <Scores :scroesData="scroesData" />
  <div class="flex mt-6 space-x-6">
    <Products class="w-[729px]" 
    title="Products"
    />
    <TrainingModule
      class="w-[351px]"
      TrainigModulesTitle="Importers"
      :TrainigModulesData="TrainigModulesData"
      TrainigModulesButtonText="Show More"
    />
  </div>
  <IncidentGraph
    IncidentGraphTitle="Product Trend Analysis"
    :incidentData="incidentData"
    :incidentChartOptions="incidentChartOptions"
  />
  <div class="flex mt-6 space-x-6">
  <ComplianceOverview class=""
      ComplianceOverviewTitle="Suppliers <span class='font-normal text-[16px] text-light-color'>(116)</span>" 
      :chartData="chartData"
      :createChart="createChart"  
      :updateChart="updateChart"  
      :chartInstance="chartInstance" 
      :chartLegends="chartLegends"
    />
    <Transactions />
  </div>
<ProductSourcing class="mt-6"/>
</template>
<script setup>
import { ref } from "vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Scores from "@/components/Dashboard/Scores.vue";
import DollarIcon from "@/components/icons/DollarIcon.vue";
import Products from "@/components/Marketplace/Products.vue";
import TrainingModule from "@/components/Dashboard/TrainingModule.vue";
import TarinerImg from "@/assets/images/TrainerImg.png";
import IncidentGraph from "@/components/Dashboard/IncidentGraph.vue";
import ComplianceOverview from "@/components/Dashboard/ComplianceOverview.vue";
import Transactions from "@/components/Marketplace/Transactions.vue";
import ProductSourcing from "@/components/Marketplace/ProductSourcing.vue";
import { Chart } from "chart.js";  


const chartData = ref({
  Cisco: 25,
  BBH: 30,
  PwC: 25,
  ALM: 20
});
const chartLegends = ref([
  { label: "Cisco", color: "#03D18F" },
  { label: "BBH", color: "#4F81F5" },
  { label: "PwC", color: "#FF9F24" },
  { label: "ALM", color: "#7200CC" },

]);

const chartInstance = ref(null);

function createChart(ctx) {
  const total = chartData.value.Cisco + chartData.value.BBH + chartData.value.PwC + chartData.value.ALM;
  const dataValues = [
    (chartData.value.Cisco / total) * 100,
    (chartData.value.BBH / total) * 100,
    (chartData.value.PwC / total) * 100,
    (chartData.value.ALM / total) * 100,

  ];

  chartInstance.value = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Cisco", "BBH", "PwC", "ALM"],
      datasets: [
        {
          data: dataValues,
          backgroundColor: ["#03D18F", "#FF9F24", "#4F81F5","#7200CC"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "75%",
      rotation: 25,
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
    const total = chartData.value.Cisco + chartData.value.BBH + chartData.value.PwC + chartData.value.ALM;
    chartInstance.value.data.datasets[0].data = [
    (chartData.value.Cisco / total) * 100,
    (chartData.value.BBH / total) * 100,
    (chartData.value.PwC / total) * 100,
    (chartData.value.ALM / total) * 100,
    ];
    chartInstance.value.update();
  }
}


const scroesData = ref([
  { label: "Total Transactions", value: "280", icon: DollarIcon },
  { label: "Listed Products", value: "453", icon: DollarIcon },
  { label: "Recent Orders", value: "12", icon: DollarIcon },
  { label: "Completed Orders", value: "12 / 10", icon: DollarIcon },
]);

const TrainigModulesData = ref([
  {
    id: 1,
    title: "Audrey Jones",
    lessons: "View Profile",
    image: TarinerImg,
  },
  {
    id: 2,
    title: "Alex Johnson",
    lessons: "View Profile",
    image: TarinerImg,
  },
  {
    id: 3,
    title: "Stella Jack",
    lessons: "View Profile",
    image: TarinerImg,
  },
]);

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
</script>
