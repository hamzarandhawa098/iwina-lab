<template>
    <button
      :class="computedClasses"
      @click="handleClick"
    >
      {{ text }}
    </button>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  defineProps({
    text: {
      type: String,
      default: "Button",
    },
    customClasses: {
      type: String,
      default: "",
    },
  });
  
  const computedClasses = computed(() =>
    `px-4 py-2 rounded-lg font-medium text-white bg-green-100 text-green-700 ${customClasses}`
  );
  
  const emit = defineEmits(["click"]);
  const handleClick = (event) => {
    emit("click", event);
  };
  </script>
  