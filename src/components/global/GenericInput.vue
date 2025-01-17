<template>
    <div>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="['w-full font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder  border border-Ticket-input rounded-lg',
          customClasses
        ]"
      />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    customClasses:{
      type : String,
      default: 'py-[17px] px-3'

    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  </script>
  