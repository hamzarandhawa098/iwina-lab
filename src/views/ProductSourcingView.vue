<template>
    <PageHeader
    linkText="Marketplace"
    currentPageText="Product Sourcing"
    slash="/"
  />
  <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
    <PageTitle title="Product Sourcing" />
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
  <ProductSourcingtable class="mt-6" 
  title="Product Sourcing"
  />
</template>
<script setup>
import PageHeader from '@/components/global/PageHeader.vue';
import PageTitle from '@/components/global/PageTitle.vue';
import Button from '@/components/global/Button.vue';
import ProductSourcingtable from '@/components/ProductSourcing/ProductSourcingtable.vue';
</script>