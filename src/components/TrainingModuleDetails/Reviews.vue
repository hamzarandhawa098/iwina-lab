<template>
  <div class="bg-white">
    <h2 class="font-nunito font-bold text-[16px] leading-[21px] text-black">
        {{ reviesTitle }}
    </h2>
    <div class="space-y-4 mt-4">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="flex items-start space-x-4"
      >
        <img
          :src="review.avatar"
          alt="Avatar"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p
            class="font-nunito font-semibold text-[16px] leading-[21px] text-Selector-Text"
          >
            {{ review.name }}
          </p>
          <div class="mt-[2px]">
            <span
              class="font-gilroyRegular text-[15px] leading-[15px] text-bar-graph-legends"
              >{{ review.date }}</span
            >
            <p
              class="font-inter font-normal text-[14px] leading-[18px] text-rating-Text"
            >
              {{ review.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-[23.55px]">
        <Button
          text="Load More Review"
          backgroundColor="bg-Ticket-cancel"
          textColor="text-load-more-button"
          custom-classes="px-[14px] py-[10px]"
        />
</div>
  </div>
</template>

<script setup>
import Button from '@/components/global/Button.vue';
defineProps({
    reviews: Array,
    reviesTitle: String,
})

</script>

<style></style>
