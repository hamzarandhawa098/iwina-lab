<template>
  <div class="px-2 lg:px-0">
    <PageTitle
      title="Compliance Monitoring & Audit Trails"
      subtitle="See Compliance list below"
      class="mt-6 lg:mt-0"
    />
    <ComplianceToolDetail />
  </div>
</template>
<script setup>
import PageTitle from "@/components/global/PageTitle.vue";
import ComplianceToolDetail from "@/components/ComplianceToolDetail/ComplianceToolDetail.vue";
</script>
