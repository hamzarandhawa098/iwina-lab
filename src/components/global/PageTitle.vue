<template>
  <div class="font-inter text-center lg:text-left">
    <h1 class="text-[30px] font-semibold leading-[38px] text-title-color">
        {{ title }}
    </h1>
    <p class="text-[16px] font-normal text-paragraph-color leading-6 mt-1">
        {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({ 
    title: String,
    subtitle: String,
})
</script>

<style scoped></style>
