<template>
    <div class="flex flex-col lg:flex-row items-center space-x-6 ">
      <img
        :src="image"
        alt="Profile"
        class="w-[200px] h-[200px] rounded-full object-cover"
      />
  
      <div class="text-center lg:text-left">
        <h2 class="font-nunito font-semibold text-[32px] leading-[40px] tracking-[-1%] text-trainer-profile-title">
          {{ instructorName }}
        </h2>
        <p class="font-nunito font-normal text-[16px] leading-6 text-trainer-profile-subtitle mt-[10px]">
          {{ title }}
        </p>
  
        <div class="flex justify-center lg:justify-normal items-center space-x-5 mt-6">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="flex items-center space-x-[6px]"
          >
            <component :is="stat.icon" />
            <span class="font-nunito font-medium text-[16px] leading-[22px] text-trainer-profile-title">
              {{ stat.value }}
            </span>
            <span class="font-nunito font-normal text-[14px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    instructorName : String,
    title: String,
    image: String,
    stats: Array,
  })
  </script>
  
  <style scoped>
  </style>