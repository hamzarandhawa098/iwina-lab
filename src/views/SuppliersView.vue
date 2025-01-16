<template>
  <PageHeader linkText="Marketplace" currentPageText="Suppliers" slash="/" />
  <div class="mt-8">
    <PageTitle title="Suppliers" />
  </div>
  <Suppliers  class="mt-6"
  title="Suppliers List"
  />
</template>
<script setup>
import PageHeader from "@/components/global/PageHeader.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Suppliers from "@/components/Suppliers/Suppliers.vue";
</script>
