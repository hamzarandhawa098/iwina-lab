<template>
    <div class="min-h-screen mt-6">
      <div class="bg-white border border-border-color shadow rounded-lg px-6 py-5">
        <h2 class="font-nunito font-bold text-[20px] leading-7 tracking-[-2%] text-title-color">Notification Settings</h2>
        <div class=" flex gap-[18px] mt-[18px]">
          <div class="flex item-center gap-1">
            <input type="checkbox" id="email-notifications" class="w-[15px] h-[15px]">
            <label for="email-notifications" class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color">Email Notifications</label>
          </div>
          <div class="flex item-center gap-1">
            <input type="checkbox" id="email-notifications" class="w-[15px] h-[15px]">
            <label for="email-notifications" class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color">SMS Notifications</label>
          </div>
        </div>
      </div>
  
      <div class="bg-white border border-border-color shadow rounded-lg px-6 py-5 mt-6">
        <h2 class="font-nunito font-bold text-[20px] leading-7 tracking-[-2%] text-title-color">Audit Preferences</h2>
        <div class=" flex gap-[18px] mt-[18px]">
          <div class="flex item-center gap-1">
            <input type="checkbox" id="email-notifications" class="w-[15px] h-[15px]">
            <label for="email-notifications" class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color">Enable Audit Logs</label>
          </div>
          <div class="flex item-center gap-1">
            <input type="checkbox" id="email-notifications" class="w-[15px] h-[15px]">
            <label for="email-notifications" class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color">Notify on Audit Events</label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  