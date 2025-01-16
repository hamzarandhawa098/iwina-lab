<template>
<PageHeader
    linkText="Suppliers"
    currentPageText="Supplier Profile"
    slash="/"
  />
  <div class="flex flex-col lg:flex-row justify-between items-center  lg:items-start mt-8">
    <PageTitle title="Transaction History" />
    <div>
      <router-link to="#">
        <Button
          text="Edit"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
  </div>
  <TransactionHistory  class="mt-[18px]"
  title="Transaction"
  />
  </template>
<script setup>
import PageHeader from '@/components/global/PageHeader.vue';
import PageTitle from '@/components/global/PageTitle.vue';
import Button from '@/components/global/Button.vue';
import TransactionHistory from '@/components/TransactionHistory/TransactionHistory.vue';

</script>