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
  import { defineProps } from "vue";
  
  const props = defineProps({
    series: {
      type: Array,
      required: true,
    },
  });
  
  const chartOptions = {
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
  };
  </script>
  
  <style scoped></style>
  