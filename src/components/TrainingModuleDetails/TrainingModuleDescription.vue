<template>
    <div class=" bg-white ">
      <div class="flex">
        <button
          class="text-primary-color font-nunito font-bold text-[14px] leading-5 border-b-2 border-primary-color px-4 py-[10px]"
          :class="{ 'border-b-2 border-primary-color': activeTab === 'description' }"
          @click="activeTab = 'description'"
        >
        {{ descriptionButton }}
        </button>
        <button
          class="font-nunito font-medium text-[14px] leading-[20px] px-4 py-[10px] border-b-2 border-transparent text-Map-title"
        >
        {{ moduleButton }}
        </button>
      </div>
  
      <div v-if="activeTab === 'description'" class="mt-4">
        <h2 class="font-nunito font-bold text-[16px] leading-[21px]">{{ title }}</h2>
        <p class="font-inter font-normal text-[16px] leading-[24px] text-rating-Text mt-4">
        {{ description }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  defineProps({
    descriptionButton: String,
    moduleButton: String,
    title: String,
    description: String
  })
  
  const activeTab = ref('description'); 
  </script>
  
  <style>
  </style>
  