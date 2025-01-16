<template>
  <div>
    <div class="bg-white flex flex-col md:flex-row w-[1055px] space-x-6">
      <div>
        <div class="w-[505px] h-[449px]">
          <img
            :src="mainImage"
            alt="Product"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex justify-start mt-[22.12px] space-x-[9.22px]">
          <img
            v-for="(thumb, index) in thumbnails"
            :key="index"
            :src="thumb"
            alt="Thumbnail"
            class="w-[76.49px] h-[78.33px] object-cover border rounded-lg cursor-pointer"
            :class="{ 'border-blue-500': mainImage === thumb }"
            @click="mainImage = thumb"
          />
        </div>
      </div>

      <div class="bg-white border border-color rounded-lg shadow w-[526px] p-5">
        <h1
          class="font-nunito font-semibold text-[32px] leading-[40px] tracking-[-1%] text-trainer-profile-title"
        >
          {{ product.name }}
        </h1>
        <p
          class="font-openSans font-semibold text-[24px] leading-[32px] text-primary-color mt-5"
        >
          ${{ product.price }}
        </p>

        <div class="flex items-center mt-5 space-x-3">
          <div class="flex space-x-1">
            <component :is="ratingicon" v-for="i in 5" :key="i" />
          </div>
          <span
            class="font-nunito text-[14px] leading-[22px] font-semibold text-product-Details-rating"
            >{{ product.rating }} Star Rating ({{
              product.reviews
            }}
            Reviews)</span
          >
        </div>
        <div class="mt-8">
          <h2
            class="font-nunito font-semibold text-[16px] leading-[24px] text-features-text-title"
          >
            Features
          </h2>
          <ul
            class="list-disc list-inside ml-2 font-nunito font-normal text-[18px] leading-[26px] text-features-text-title mt-6"
          >
            <li v-for="(feature, index) in product.features" :key="index">
              {{ feature }}
            </li>
          </ul>

          <div class="flex items-center justify-between mt-4">
            <span
              class="font-nunito font-bold text-[16px] leading-[24px] text-Instock-text"
              v-if="product.inStock"
            >
              In Stock
            </span>
            <span class="text-red-500 font-semibold text-sm" v-else>
              Out of Stock
            </span>
            <span class="font-nunito font-semibold text-[16px] leading-6 text-features-text-title">
              Available Stock: <span class="bg-Available-stock-bg px-2 py-1 rounded-[6px]">{{ product.stock }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    mainImage : String,
    ratingicon: String,
    product: Object,
    thumbnails: Array,
})
</script>
