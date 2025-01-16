<template>
  <PageHeader
    linkText="Marketplace"
    currentPageText="Product Listing"
    slash="/"
  />
  <div class="flex flex-col lg:flex-row justify-between items-center mt-8">
    <PageTitle title="Product List" />
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="lg:w-[385px] px-4 h-[44px] py-2 border rounded-lg focus:outline-none pl-[42px]"
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
          custom-classes="px-4 py-3 border border-primary-color w-full lg:w-auto"
        />
      </div>
      <div>
        <router-link to="/add-new-product" class="w-full lg:w-auto">
          <Button
            text="Add New Product"
            backgroundColor="bg-primary-color"
            textColor="text-bold-color"
            custom-classes="px-4 py-3 w-full lg:w-auto"
          />
        </router-link>
      </div>
    </div>
  </div>
  <div class="bg-white border border-border-color shadow rounded-lg  mt-6 px-6 py-5">
    <ProductsList title="Products" />
  </div>
</template>
<script setup>
import PageHeader from "@/components/global/PageHeader.vue";
import ProductsList from "@/components/ProductListing/ProductsList.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>
