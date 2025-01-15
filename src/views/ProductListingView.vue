<template>
  <PageHeader
    linkText="Marketplace"
    currentPageText="Product Listing"
    slash="/"
  />
  <div class="flex justify-between items-center mt-8">
    <PageTitle title="Product List" />
    <div class="flex space-x-6">
      <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="w-[385px] px-4 h-[44px] py-2 border rounded-lg focus:outline-none pl-[42px]"
        />
        <div class="absolute inset-y-0 left-0 flex items-center pl-[14px]">
          <SearchIcon />
        </div>
      </div>
      <div>
        <Button
          text="Edit"
          backgroundColor="bg-white"
          textColor="text-primary-color"
          custom-classes="px-4 py-3 border border-primary-color"
        />
      </div>
      <div>
        <router-link to="#">
          <Button
            text="Add New Product"
            backgroundColor="bg-primary-color"
            textColor="text-bold-color"
            custom-classes="px-4 py-3"
          />
        </router-link>
      </div>
    </div>
  </div>
  <ProductsList title="Products" />
</template>
<script setup>
import PageHeader from "@/components/global/PageHeader.vue";
import ProductsList from "@/components/ProductListing/ProductsList.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>
