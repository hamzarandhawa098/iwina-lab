<template>
    <nav>
      <ol class="flex space-x-3">
        <li>
          <router-link class="font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05] text-bar-graph-legends">{{ linkText }}</router-link>
        </li>
        <li>
          <span class="text-slash-color h-[9.45px] ">{{ slash }}</span>
        </li>
        <li>
          <span class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-Selector-Text">{{ currentPageText }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  defineProps({
    linkText: String,
    currentPageText: String,
    slash: String
  })
  </script>
  
  
  <style scoped>
  </style>
  