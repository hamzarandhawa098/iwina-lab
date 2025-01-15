<template>
  <router-link
    :to="`/product/${product.id}`"
    class="bg-white border border-border-color p-[14.83px] w-[248px] h-[334px] rounded-lg shadow overflow-hidden"
  >
    <div class="w-[219px] h-[185px]">
      <img
        :src="product.image"
        alt="Product Image"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="mt-[11.48px]">
      <h2
        class="font-nunito font-semibold text-[12.9px] leading-[17.8px] text-compliance-card-title"
      >
        {{ product.name }}
      </h2>
      <p
        class="font-nunito font-normal text-[10.75px] leaidng-[14.67px] text-compliance-card-text mt-[11.86px]"
      >
        {{ product.description }}
      </p>
      <div class="flex items-center justify-between mt-[11.86px]">
        <span
          class="font-nunito font-semibold text-[12.9px] leading-[17.6px] text-product-price"
          >{{ product.price }}</span
        >
        <div class="flex items-center space-x-1">
          <ProductRatingStarIcon />
          <span
            class="font-nunito font-normal text-[15.05px] leading-[21.5px] tracking-[-0.05px] text-black"
            >{{ product.rating }}</span
          >
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import ProductRatingStarIcon from "@/components/icons/ProductRatingStarIcon.vue";
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
