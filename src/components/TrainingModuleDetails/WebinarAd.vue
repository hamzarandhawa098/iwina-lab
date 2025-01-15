<template>
    <div class="relative w-[336px] h-[512px] rounded-lg overflow-hidden shadow-lg">
      <img
        :src="bgImage"
        alt="Mentor"
        class="absolute inset-0 w-[336px] h-[512px] object-cover"
      />
  
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
      ></div>
  
      <div class="absolute bottom-10 right-[35px] left-5 text-white space-y-2">
        <div class="inline-block p-[4px] uppercase bg-notification-color rounded-[2px] font-gilroyBold ">
          {{ title }}
        </div>
        <p class="font-normal text-[20px] leading-[30px] text-Webinar-Text font-gilroyLight">{{ speaker }}</p>
        <h2 class="font-nunito font-normal text-[28px] leading-[42px]  ">
            {{ description }}
        </h2>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    bgImage: String,
    title: String,
    speaker: String,
    description: String,
  })


  </script>
  
  <style>
  </style>
  