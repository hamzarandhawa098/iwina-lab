<template>
<div class="flex flex-col lg:flex-row items-center lg:items-start justify-between">
  <PageTitle
    title="Compliance Reporting & Insights"
    subtitle="Generate Report"
    class="mt-6 lg:mt-0"
  />
  <div class="flex gap-6">
  <Button
    text="Export as PDF"
    backgroundColor="bg-primary-color"
    textColor="text-bold-color"
    custom-classes="px-4 py-3"
  />
  <Button
    text="Export as Excel"
    backgroundColor="bg-primary-color"
    textColor="text-bold-color"
    custom-classes="px-4 py-3"
  />
</div>
</div>
<EntityDetail />
</template>
<script setup>
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import EntityDetail from "@/components/EntityDetail/EntityDetail.vue";
</script>
