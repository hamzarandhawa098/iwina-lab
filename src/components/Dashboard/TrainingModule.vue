<template>
  <div class="bg-white border  border-border-color rounded-lg px-6 py-6 shadow w-full">
    <h2
      class="text-[20px] font-bold text-title-color font-nunito leading-[28px] tracking-[-2%]"
    >
    {{ TrainigModulesTitle }}
    </h2>
    <div class="mt-5">
      <div v-for="module in TrainigModulesData" :key="module.id" class="">
        <div class="flex items-center space-x-3">
          <img
            :src="module.image"
            alt="Module Image"
            class="w-[46px] h-auto rounded-md object-cover"
          />
          <div class="py-4">
            <h3
              :class="['font-inter text-[14px] leading-5 text-title-color',
                isDashboard ? 'text-title-color font-medium ' : 'text-black font-normal'
              ]"
            >
              {{ module.title }}
            </h3>
            <p
              :class="[' leading-5',
              isDashboard ? 'text-paragraph-color font-inter font-normal text-[14px]' : 'font-nunito text-[10px] text-primary-color font-bold'
              ]"
            >
              {{ module.lessons }} 
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex justify-center">
      <button
        class="text-training-button font-nunito tracking-[-0.05px] font-bold leading-5"
      >
      {{ TrainigModulesButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isDashboard = computed(() => route.path ==='/dashboard')

defineProps({
    TrainigModulesData : String,
    TrainigModulesTitle : String,
    TrainigModulesButtonText: String,
    
})
</script>

<style scoped></style>
