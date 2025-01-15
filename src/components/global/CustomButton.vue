<template>
    <button
      :class="computedClasses"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <span v-if="showDot" :class="dotClasses" class="w-2.5 h-2.5 rounded-full mr-2"></span>
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    baseClasses: {
      type: String,
      default: "flex items-center px-[14px] py-2 rounded-[8px]",
    },
    textClasses: {
      type: String,
      default: "font-mediumBold text-[14px] font-nunito leading-[20px] tracking-[-0.05px]",
    },
    colorClasses: {
      type: String,
      default: "bg-green-100 text-green-600",
    },
    dotClasses: {
      type: String,
      default: "w-2.5 h-2.5 rounded-full mr-2",
    },
    showDot: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });
  
  defineEmits(["click"]);
  
  const computedClasses = computed(() =>
    [
      props.baseClasses,
      props.textClasses,
      props.colorClasses,
      props.disabled ? "opacity-50 cursor-not-allowed" : "",
    ].join(" ")
  );
  </script>
  