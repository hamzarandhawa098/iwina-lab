<template>
    <div class="p-6 bg-white flex flex-col lg:flex-row items-start lg:space-x-16">
      <div class="relative lg:w-2/3">
        <img 
          :src="Map" 
          alt="World Map" 
          class="w-full rounded-lg"
        />
        <div 
          v-for="point in points"
          :key="point.id"
          :style="{ top: point.top, left: point.left }"
          class="absolute w-4 h-4 bg-blue-500 rounded-full cursor-pointer opacity-75 hover:opacity-100"
          @mouseenter="hoveredPoint = point"
          @mouseleave="hoveredPoint = null"
        >
          <div 
            v-if="hoveredPoint && hoveredPoint.id === point.id" 
            class="absolute bg-white border shadow-lg rounded-lg p-2 text-sm"
            :style="{ transform: 'translate(-50%, -100%)', top: '-0.5rem', left: '50%' }"
          >
            <p class="font-semibold">{{ point.name }}</p>
            <p class="text-gray-500 text-xs">{{ point.website }}</p>
          </div>
        </div>
      </div>
  
      <div class="lg:w-1/3 w-full">
        <h2 class="font-inter" v-html="tableTitle"></h2>
        <ul class="grid grid-cols-2 lg:grid-cols-1 gap-4   mt-4 lg:space-y-6">
          <li v-for="(detail, index) in details" :key="index" class="flex items-center space-x-4">
          <component :is="detail.flag" />
            <div>
              <p class="font-medium font-inter text-[14px] leading-[20px] text-Map-title">{{ detail.name }}</p>
              <p class="font-inter font-normal text-[12px] leading-[18px] text-paragraph-color">{{ detail.website }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Map from "@/assets/images/Map.png"

  defineProps({
    tableTitle: String,
    points: Array,
    details: Array,
    options: Array,
  })
  
  const hoveredPoint = ref(null);

  </script>
  
  <style scoped>
  </style>
  