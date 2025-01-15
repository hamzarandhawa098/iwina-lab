<template>
  <div
    class="w-full max-w-full mx-auto p-5 mt-6 border border-border-color rounded-lg shadow bg-white"
  >
    <div class="flex justify-between">
      <div class="flex items-center space-x-[11px]">
        <h3
          class="font-nunito text-[16px] font-mediumBold leading-[22px] tracking-[-0.18px] text-scores-label"
        >
          {{ SupportDetailsTitle }}
        </h3>
        <span
          class="font-nunito font-mediumSemiBold text-[14px] leading-5 tracking-[-0.02px] text-urgent-text"
          >{{ SupportPresidency }}</span
        >
      </div>
      <div class="flex text-right justify-center items-center space-x-[26px]">
        <div class="flex space-x-2">
          <p
            class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-scores-label"
          >
            {{ SupportTicket }}
          </p>
          <router-link
            to="#"
            class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-support-no"
            >#{{ SupportTicketNumber }}</router-link
          >
        </div>
        <div class="flex items-center">
          <CustomButton
            :color-classes="'bg-pending-Table text-pending-Text'"
            :dot-classes="'bg-pending-Text'"
            :show-dot="true"
          >
          Open
          </CustomButton>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <p
        class="font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-light-color"
      >
        {{ SupportDescription }}
      </p>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "@/components/global/CustomButton.vue";
defineProps({
  SupportDetailsTitle: String,
  SupportPresidency: String,
  SupportTicket: String,
  SupportTicketNumber: Number,
  SupportDescription: String,
});
</script>

<style></style>
