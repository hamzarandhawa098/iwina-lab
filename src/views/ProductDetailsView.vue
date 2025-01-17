<template>
  <PageHeader
    linkText="Marketplace"
    currentPageText="Product Details"
    slash="/"
  />
  <div class="flex flex-col lg:flex-row justify-between items-center  lg:items-start mt-8">
    <PageTitle title="Product Details" />
    <div>
      <router-link to="/edit-product">
        <Button
          text="Edit"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
  </div>
  <div
    class="bg-white border rounded-lg shadow border-border-color mt-11 px-6 py-5"
  >
    <ProductDetails
      :mainImage="mainImage"
      :ratingicon="ProductRatingStarIcon"
      :product="product"
      :thumbnails="thumbnails"
    />
    <TrainingModuleDescription
      class="mt-6"
      descriptionButton="Description"
      moduleButton="Reviews"
      title="About Product"
      description="A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing."
    />
    <ProductsList class="mt-6" title="Related Products" />
  </div>
</template>
<script setup>
import PageHeader from "@/components/global/PageHeader.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import ProductDetails from "@/components/ProductDetails/ProductDetails.vue";
import { ref } from "vue";
import mainImage from "@/assets/images/mainImage.png";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";
import img5 from "@/assets/images/img5.png";
import img6 from "@/assets/images/img6.png";
import ProductRatingStarIcon from "@/components/icons/ProductRatingStarIcon.vue";
import TrainingModuleDescription from "@/components/TrainingModuleDetails/TrainingModuleDescription.vue";
import ProductsList from "@/components/ProductListing/ProductsList.vue";

const product = ref({
  name: "Green House Frame",
  price: 39.95,
  rating: 4.0,
  reviews: 278,
  inStock: true,
  stock: 5,
  features: [
    "Helping to clear the cutter bar",
    "Preventing stripping and shelling",
    "Allowing for more even threshing",
    "Increased ground speed",
    "Quickly slips over the existing finger",
    "Attaches directly to the reel pipe",
    "Further secured with unique clip system",
    "Proven to reduce Front Losses up to 75%",
    "Eliminating the need for air reels",
  ],
});

const thumbnails = ref([img1, img2, img3, img4, img5, img6]);
</script>
