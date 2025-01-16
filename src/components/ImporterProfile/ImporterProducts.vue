<template>
  <div
    class="bg-white py-6 px-[19px] rounded-lg shadow border border-border-color"
  >
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <h2
        class="font-nunito font-bold text-[20px] leading-7 tracking-[-2%] text-trainer-profile-title"
      >
      {{ title }}
      </h2>

      <Button
        text="View All"
        backgroundColor="bg-primary-color"
        textColor="text-bold-color"
        custom-classes="px-4 py-3 w-full lg:w-auto"
      />
    </div>
    <div class="flex justify-center">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-[17px] gap-y-6 mt-4">
      <ProductsCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductsCard from "@/components/global/ProductsCard.vue";
import Product1 from "@/assets/images/Product1.png";
import Product2 from "@/assets/images/Product2.png";
import Product3 from "@/assets/images/Product3.png";
import Product4 from "@/assets/images/Product4.png";
import Button from "@/components/global/Button.vue";
defineProps({
    title: String,
})

const products = ref([
  {
    id: 1,
    name: "Herb Spray",
    description:
      "A natural, refreshing spray infused with herbal extracts to revitalize your space and promote well-being.",
    price: "80.00",
    rating: 3.5,
    image: Product1,
  },
  {
    id: 2,
    name: "Green House Frames",
    description:
      "A natural, refreshing spray infused with herbal extracts to revitalize your space and promote well-being.",
    price: "3000.00",
    rating: 3.5,
    image: Product2,
  },
  {
    id: 3,
    name: "Devast (Herbicide)",
    description:
      "A natural, refreshing spray infused with herbal extracts to revitalize your space and promote well-being.",
    price: "200.00",
    rating: 3.5,
    image: Product3,
  },
  {
    id: 4,
    name: "Green House Frames",
    description:
      "A natural, refreshing spray infused with herbal extracts to revitalize your space and promote well-being.",
    price: "40.00",
    rating: 3.5,
    image: Product4,
  },
]);
</script>
