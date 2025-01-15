<template>
  <div class="w-[247px] h-[242px] bg-white border border-border-color shadow-md rounded-lg text-center p-5">
    <div class="flex justify-center items-center">
      <div
        class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
      >
        <component :is="logo" />
      </div>
    </div>
    <h2
      class="font-inter font-semibold text-[18px] mt-4 leading-6 text-compliance-card-title"
    >
    {{ title }}
    </h2>
    <p
      class="font-nunito font-normal text-[12px] leading-[16.37px] text-compliance-card-text mt-[15px]"
    >{{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title:  String,
  description: String,
  logo: String,
})
</script>

<style scoped></style>
