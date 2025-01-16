<template>
    <div class="lg:p-5 p-2 bg-white">
      <div class="py-6">
        <div class="text-center lg:text-left">
          <h1 class="font-nunito font-semibold text-[32px] leading-[40px] tracking-[-1%] text-trainer-profile-title">
            {{ profile.name }}
          </h1>
          <p class="mt-[10px] font-nunito font-normal text-[16px] leading-6 text-trainer-profile-subtitle">
            {{ profile.role }}
          </p>
        </div>
        <div class="flex justify-center lg:justify-normal items-center mt-6">
          <ProductRatingStarIcon class="mr-[6px]" />
          <span
            class="font-nunito font-medium text-[16px] leading-[22px] mr-[2px] text-trainer-profile-title"
          >
            {{ profile.rating }}
          </span>
          <span
            class="font-nunito font-normal text-[14px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle"
          >
            ({{ profile.reviews }} reviews)
          </span>
        </div>
      </div>
      <div
        class="mt-[22px] bg-white border border-border-color rounded-lg shadow p-6 "
      >
        <h2
          class="font-nunito font-bold text-[20px] uppercase leading-[20px] text-trainer-profile-title"
        >
          {{ profile.aboutTitle }}
        </h2>
        <p
          class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle mt-4"
        >
          {{ profile.about }}
        </p>
        <h3
          class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle"
        >
          {{ profile.offeringTitle }}
        </h3>
        <ul
          class="list-disc ml-2 list-inside font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle"
        >
          <li v-for="(offering, index) in profile.offerings" :key="index">
            {{ offering }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductRatingStarIcon from "@/components/icons/ProductRatingStarIcon.vue";
  defineProps({
    profile: Object,
  })
  
  </script>
  
  <style scoped>

  </style>
  