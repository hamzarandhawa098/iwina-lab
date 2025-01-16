<template>
    <div class="lg:w-[1104px] mx-auto mt-6 px-6 py-5 bg-white border border-border-color rounded-lg shadow">
      <h2 class="font-inter font-semibold text-[30px] leading-[38px] text-title-color">Analytics Overview</h2>
      <div class="space-y-[22px] mt-[22px]">
        <div class="flex justify-between items-center">
          <span class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder">Compliance Performance</span>
          <span class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Popup-text">{{ compliancePerformance }}%</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder">Risk Identified</span>
          <span class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Popup-text">{{ riskIdentified }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder">Recent Enforcement Actions</span>
          <span class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Popup-text">{{ enforcementActions }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const compliancePerformance = ref(85); 
  const riskIdentified = ref(5); 
  const enforcementActions = ref(2); 
  </script>
  
  <style scoped>
  </style>
  