<template>
  <div
    class="bg-white shadow  lg:w-[258px] lg:h-[102px] rounded-[8px] border border-border-color p-5  flex flex-col"
  >
    <div class="flex justify-between">
      <div class="space-y-[10px]">
        <div class="text-[14px] leading-[20px] font-nunito tracking-[-0.05px] font-normal text-scores-title mt-1">
          {{ score.label }}
        </div>
        <div class="font-nunito font-bold text-[24px] leading-8 text-scores-label">
          {{ score.value }}
        </div>
      </div>
      <div class="flex items-center">
        <component :is="score.icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  score: Object,
})
</script>

<style scoped></style>
