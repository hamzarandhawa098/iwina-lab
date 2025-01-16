<template>
    <div class="flex flex-col lg:flex-row items-center lg:w-[1104px] space-x-6">
      <img
        :src="SuppliersImage"
        alt="Profile"
        class="w-[200px] h-[200px] rounded-full object-cover"
      />
      <div class="grid grid-cols-2 mt-[24px] md:grid-cols-3 gap-4">
        <Scores
          v-for="(score, index) in scroesData"
          :key="index"
          :score="score"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Scores from "@/components/Dashboard/Scores.vue";
  import DollarIcon from "@/components/icons/DollarIcon.vue";
  defineProps({
    SuppliersImage : String
  })
  
  const scroesData = ref([
    { label: "Total Transactions", value: "280", icon: DollarIcon },
    { label: "Listed Products", value: "453", icon: DollarIcon },
    { label: "Recent Orders", value: "12", icon: DollarIcon },
  ]);
  </script>
  
  <style scoped></style>
  