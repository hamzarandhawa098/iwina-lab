<template>
  <div class="bg-white shadow-md max-w-[520px] w-full py-6 px-[71.75px] rounded-lg border border-border-color">
    <h2 class="font-nunito font-bold text-[20px] leading-[20px] text-trainer-profile-title">{{ title }}</h2>
    <p class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle mt-4" v-html="description">
    </p>
  </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
})

</script>

<style></style>
