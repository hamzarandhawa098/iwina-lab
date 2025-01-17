<template>
    <div class="flex flex-col lg:flex-row items-center max-w-full w-full gap-6">
      <div class="w-3/4">
        <video
          ref="videoPlayer"
          class="lg:w-[690px] w-full h-[315px] rounded-xl"
          controls
          :src="video"
        ></video>
      </div>
      <div class="w-[336px] p-2 lg:h-[315px] bg-white border border-border-color rounded-lg shadow-md lg:p-5 text-sm space-y-4">
        <div v-for="(item, index) in videoDetails" :key="index" class="flex items-center space-x-4">
          <component :is="item.icon" />
          <p class="font-inter text-[16px] leading-[24px] font-normal text-Video-description">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  defineProps({
    video : String,
    videoDetails: Array
  })
  
  const videoPlayer = ref(null);
  
  function playPauseVideo() {
    const video = videoPlayer.value;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  </script>
  