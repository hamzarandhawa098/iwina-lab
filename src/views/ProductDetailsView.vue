<template>
      <PageHeader
    linkText="Marketplace"
    currentPageText="Product Details"
    slash="/"
  />
  <div class="flex justify-between items-start mt-8">
    <PageTitle title="Product Details" />
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
</template>
<script setup>
import PageHeader from "@/components/global/PageHeader.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";

</script>