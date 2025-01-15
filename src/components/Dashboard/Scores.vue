<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 mt-[24px] md:grid-cols-4 gap-4">
    <div
      v-for="(score, index) in scroesData"
      :key="index"
      class="bg-white shadow w-[258px] h-[102px] rounded-[8px] border border-border-color p-5 gap-6   flex flex-col"
    >
      <div class="flex justify-between">
        <div class="space-y-[10px]">
            <div class="text-[14px] leading-[20px] font-nunito tracking-[-0.05px] font-normal text-scores-title mt-1">
              {{ score.label }}
            </div>
          <div class="font-nunito font-bold text-[24px] leading-8 text-scores-label">{{ score.value }}</div>
        </div>
        <div class="flex items-center">
          <component :is="score.icon" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

defineProps({
    scroesData: Array,
})
</script>

<style scoped></style>
