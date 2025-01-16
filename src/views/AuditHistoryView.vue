<template>
    <PageTitle
      title="JD Farm Audit History"
      subtitle="Compliance Monitoring & Audit Trails / Audit Detail"
      class="mt-6 lg:mt-0"
    />
    <AuditHistory />
</template>
<script setup>
import PageTitle from '@/components/global/PageTitle.vue';
import AuditHistory from '@/components/AuditHistory/AuditHistory.vue';
</script>