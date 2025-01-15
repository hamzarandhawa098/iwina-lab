<template>
    <button
      :class="[
        'rounded-md font-nunito font-mediumBold text-center',
        backgroundColor,
        textColor,
        customClasses
      ]"
      @click="handleClick"
    >
      {{ text }}
    </button>
  </template>
  
  <script setup>
  import {  defineEmits } from "vue";
  
  defineProps({
    text: {
      type: String,
      default: "Button", 
    },
    backgroundColor: {
      type: String,
      default: "bg-green-500", 
    },
    textColor: {
      type: String,
      default: "text-black", 
    },
    customClasses: {
      type: String,
      default: "", 
    },
  });
  
  const emit = defineEmits(["click"]);
  const handleClick = () => {
    emit("click");
  };
  </script>
  
  <style scoped></style>
  