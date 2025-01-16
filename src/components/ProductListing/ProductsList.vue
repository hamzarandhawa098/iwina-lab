<template>
  <div>
    <div class="flex flex-col lg:flex-row justify-between items-center">
    <h1 class="font-inter font-semibold text-[30px] leading-[38px] text-title-color">{{ title }}</h1>
    <div v-if="route.name === 'SupplierProfile'" class="mt-4">
      <Button
            text="View All"
            backgroundColor="bg-primary-color"
            textColor="text-bold-color"
            custom-classes="px-4 py-3"
          />
    </div>
  </div>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[22px]">
      <ProductsCard
        v-for="(product, index) in displayedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import ProductsCard from "@/components/global/ProductsCard.vue";
import Product1 from "@/assets/images/Product1.png";
import Product2 from "@/assets/images/Product2.png";
import Product3 from "@/assets/images/Product3.png";
import Product4 from "@/assets/images/Product4.png";
import Button from "@/components/global/Button.vue";

defineProps({
  title: String,
});

const route = useRoute();

const products = ref([
  {
    id: 1,
    name: "Herb Spray",
    description:
      "A natural, refreshing spray infused with herbal extracts to revitalize your space and promote well-being.",
    price: 80.0,
    rating: 3.5,
    image: Product1,
  },
  {
    id: 2,
    name: "Green House Frames",
    description:
      "High-quality frames to construct your green house for nurturing plants.",
    price: 3000.0,
    rating: 3.5,
    image: Product2,
  },
  {
    id: 3,
    name: "Devast (Herbicide)",
    description:
      "A highly effective herbicide to keep your garden weed-free and healthy.",
    price: 200.0,
    rating: 3.5,
    image: Product3,
  },
  {
    id: 4,
    name: "Green House Frames",
    description:
      "High-quality frames to construct your green house for nurturing plants.",
    price: 40.0,
    rating: 3.5,
    image: Product4,
  },
  {
    id: 5,
    name: "Herb Spray",
    description:
      "A natural, refreshing spray infused with herbal extracts to revitalize your space and promote well-being.",
    price: 80.0,
    rating: 3.5,
    image: Product1,
  },
  {
    id: 6,
    name: "Green House Frames",
    description:
      "High-quality frames to construct your green house for nurturing plants.",
    price: 3000.0,
    rating: 3.5,
    image: Product2,
  },
  {
    id: 7,
    name: "Devast (Herbicide)",
    description:
      "A highly effective herbicide to keep your garden weed-free and healthy.",
    price: 200.0,
    rating: 3.5,
    image: Product3,
  },
  {
    id: 8,
    name: "Green House Frames",
    description:
      "High-quality frames to construct your green house for nurturing plants.",
    price: 40.0,
    rating: 3.5,
    image: Product4,
  },
  {
    id: 9,
    name: "Herb Spray",
    description:
      "A natural, refreshing spray infused with herbal extracts to revitalize your space and promote well-being.",
    price: 80.0,
    rating: 3.5,
    image: Product1,
  },
  {
    id: 10,
    name: "Green House Frames",
    description:
      "High-quality frames to construct your green house for nurturing plants.",
    price: 3000.0,
    rating: 3.5,
    image: Product2,
  },
  {
    id: 11,
    name: "Devast (Herbicide)",
    description:
      "A highly effective herbicide to keep your garden weed-free and healthy.",
    price: 200.0,
    rating: 3.5,
    image: Product3,
  },
  {
    id: 12,
    name: "Green House Frames",
    description:
      "High-quality frames to construct your green house for nurturing plants.",
    price: 40.0,
    rating: 3.5,
    image: Product4,
  },
]);

const displayedProducts = computed(() => {
  return ["productdetails", "SupplierProfile"].includes(route.name)
    ? products.value.slice(0, 4)
    : products.value;
});


</script>
