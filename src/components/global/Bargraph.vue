<template>
  <div id="app">
    <VueApexCharts
      type="bar"
      :options="chartOptions"
      :series="series"
      height="245"
    />
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import { defineProps, ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  series: {
    type: Array,
    required: true,
  },
});

const chartOptions = ref({
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "33px",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Jan", "Mar", "Apr", "Jun", "Aug", "Sep", "Nov", "Dec"],
    position: "bottom",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#07031154",
        fontSize: "12px",
        fontWeight: "normal",
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: "#07031154",
        fontSize: "12px",
        fontWeight: "normal",
      },
    },
  },
});

const updateChartOptions = () => {
  const isSmallDevice = window.innerWidth <= 768;
  chartOptions.value = {
    ...chartOptions.value,
    plotOptions: {
      bar: {
        ...chartOptions.value.plotOptions.bar,
        columnWidth: isSmallDevice ? 20 : "33px",
      },
    },
  };
};

const handleResize = () => {
  updateChartOptions();
};

onMounted(() => {
  updateChartOptions();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped></style>
