<template>
  <div
  :class="[
      ' overflow-hidden rounded-lg shadow bg-white border',
      isTrainingResources ? 'w-[336px] h-[357px] px-5 py-5' : 'w-[231px] h-[245px] px-[13.80px] py-[13.80px]'
    ]"  >
    <img class="w-[296px] h-auto" :src="image" alt="Card Image" />
    <div :class="[isTrainingResources ? 'mt-4' : 'mt-[10.68px]']">
      <div class="flex justify-between">
        <h2
          :class="['font-inter font-semibold  text-compliance-card-title',
          isTrainingResources ? 'text-[18px] leading-6' : 'text-[12.41px] leading-4'

          ]"
        >
          {{ title }}
        </h2>
        <p
          :class="['font-inter font-normal text-paragraph-color',
          isTrainingResources ? ' text-[14px] leading-5' : 'text-[9.66px] leading-[13.79px]'
        ]"
        >
          {{ lessons }} lessons
        </p>
      </div>
      <p
        :class="['font-nunito font-normal  text-compliance-card-text',
          isTrainingResources ? 'text-[14px] leading-[19px]  mt-4' : 'text-[9.66px] leading-[13.17px] mt-[11.03px]'
        ]"
      >
        {{ description }}
      </p>
    </div>
    <div :class="['flex justify-between',
      isTrainingResources ? 'mt-4' : 'mt-[11.06px]'
    ]">
      <router-link :to="`/training-resources/${title}`">
        <Button
          text="Start Course"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          :custom-classes="[isTrainingResources ? 'px-3 py-2' : 'py-[5.41px] px-[8px] text-[9.66px]']"
        />
      </router-link>
      <div class="flex items-center">
        <img
          class="w-6 h-6 rounded-full"
          :src="instructorAvatar"
          alt="Instructor Avatar"
        />
        <span
          :class="['ml-2 font-inter font-normal  text-paragraph-color',
          isTrainingResources ? 'text-[14px] leading-5' : 'text-[9.66px] leading-[13.80px]'
          ]"
          >{{ instructor }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/global/Button.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const isTrainingResources = computed(() => route.path === "/training-resources");

defineProps({
  image: String,
  title: String,
  lessons: Number,
  description: String,
  instructor: String,
  instructorAvatar: String,
});
</script>

<style scoped></style>
