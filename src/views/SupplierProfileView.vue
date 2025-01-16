<template>
  <PageHeader
    linkText="Suppliers"
    currentPageText="Supplier Profile"
    slash="/"
  />
  <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8 ">
    <PageTitle title="Supplier Profile" />
    <div>
      <router-link to="/importer-transactions">
        <Button
          text="View All Transactions"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
  </div>
  <SupplierData class="mt-10 lg:mt-6" :SuppliersImage="SuppliersImage" />

  <div class="bg-white border border-border-color rounded-lg shadow mt-6">
    <SuppliersDescription :profile="profile" />
    <div class="bg-white border border-border-color mt-6 mx-5 rounded-lg shadow">
    <ProductsList class="p-6" title="Featured Products" />
</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import SupplierData from "@/components/SupplierProfile/SupplierData.vue";
import SuppliersImage from "@/assets/images/SuppliersImage.png";
import SuppliersDescription from "@/components/SupplierProfile/SuppliersDescription.vue";
import ProductsList from "@/components/ProductListing/ProductsList.vue";

const profile = ref({
  name: "James Willson",
  role: "Products Supplier",
  rating: 4.8,
  reviews: 134653,
  aboutTitle: "About Me",
  about:
    "James Willson is a trusted supplier of high-quality farming products dedicated to empowering farmers and agricultural businesses. With years of experience in the industry, James understands the unique needs of farmers and strives to provide solutions that enhance productivity and sustainability.",
  offeringTitle: "Product Offerings:",
  offerings: [
    "Seeds: A wide variety of seeds, including vegetables, grains, and specialty crops.",
    "Fertilizers: Organic and chemical fertilizers to boost soil health and crop yield.",
    "Pesticides: Effective and safe pest control solutions to protect crops.",
    "Farming Tools: Hand tools and machinery designed for efficiency and ease of use.",
    "Irrigation Equipment: Advanced irrigation systems for efficient water management.",
  ],
});
</script>
