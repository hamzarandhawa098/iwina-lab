<template>
  <div class="flex justify-center lg:justify-start items-center space-x-4">
    <div>
      <h2 class="font-inter text-center lg:text-left text-[24px] leading-[29.05px] font-semibold">
        {{ ModuleTitle }}
      </h2>
      <div class="flex items-center space-x-4 mt-[21px]">
        <div class="flex space-x-2 items-center">
          <img
            :src="TrainerImg"
            alt="User Avatar"
            class="w-6 h-6 rounded-full"
          />
          <div
            class="font-inter font-normal text-[14px] leading-[20px] text-paragraph-color"
          >
          {{ TrainerName }}
          </div>
        </div>
        <div class="flex">
          <component :is="icon" />
          <span class="font-nunito font-semibold text-[16px]  leading-6 "
            >{{ Rating }}
            <span class="font-normal text-[14px] leading-[18px] text-rating-Text">({{ TotalReviews }} ratings)</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    icon: String,
    TrainerImg: String,
    ModuleTitle: String,
    TrainerName: String,
    Rating: Number,
    TotalReviews: Number
})

</script>

<style scoped></style>
