<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    @click="closePopup"
  >
    <div
      class="bg-white rounded-lg shadow-lg w-[400px] lg:w-[680px] p-10 relative"
      @click.stop 
    >
      <h2 class="font-inter font-semibold text-[30px] leading-[38px] text-center">Report Preview</h2>
      <div class="mt-6">
        <p class="flex justify-between font-nunito font-mediumBold text-[18px] leading-6 tracking-[-0.26px] text-Popup-text"><span class="text-title-color">Entity Name:</span> {{ reportData.entityName }}</p>
        <p class="mt-6 flex justify-between font-nunito font-mediumBold text-[18px] leading-6 tracking-[-0.26px] text-Popup-text"><span class="text-title-color">Entity Type:</span> {{ reportData.entityType }}</p>
        <p class="mt-6 flex justify-between font-nunito font-mediumBold text-[18px] leading-6 tracking-[-0.26px] text-Popup-text"><span class="text-title-color">Date From:</span> {{ reportData.dateFrom }}</p>
        <p class="mt-6 flex justify-between font-nunito font-mediumBold text-[18px] leading-6 tracking-[-0.26px] text-Popup-text"><span class="text-title-color">Date To:</span> {{ reportData.dateTo }}</p>
        <p class="mt-6 font-nunito font-mediumBold text-[18px] leading-6 tracking-[-0.26px] text-title-color">Summary:</p>
        <p class="mt-3 font-nunito font-normal text-[16px] leading-[22px] tracking-[-0.18px] text-compliance-card-title">{{ reportData.summary }}</p>
      </div>
      <div class="flex justify-center mt-6">
        <Button
            text="Download PDF"
            backgroundColor="bg-primary-color"
            textColor="text-bold-color"
            custom-classes="w-full py-3"
            type="submit"
          />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import Button from "@/components/global/Button.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  reportData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closePopup = () => {
  emit("close");
};

const downloadPDF = () => {
  console.log("Downloading PDF...");
};
</script>

<style scoped></style>
