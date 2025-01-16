<template>
<PageHeader
    linkText="Importers Profile"
    currentPageText="Importer Transactions"
    slash="/"
  />
  <div class="mt-8">
    <PageTitle title="Importer Transactions" />
  </div>
  <ImporterTransactions class="mt-6"
  title="Transactions"
  />
  
</template>
<script setup>
import PageHeader from '@/components/global/PageHeader.vue';
import PageTitle from '@/components/global/PageTitle.vue';
import ImporterTransactions from '@/components/ImporterTransactions/ImporterTransactions.vue';
</script>