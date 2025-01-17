<template>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      @click="handleClickOutside"
    >
      <div
        class="bg-white rounded-lg shadow-lg w-[400px] lg:w-[680px] p-10"
        @click.stop
      >
        <h2
          class="font-inter font-semibold text-[30px] leading-[38px] text-center text-title-color"
        >
          Generate Compliance Report
        </h2>
        <form @submit.prevent="generateReport" class="mt-6">
          <div class="mb-6">
            <GenericInput
              v-model="form.fullName"
              id="fullName"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div class="mb-6">
            <select
              v-model="form.entityType"
              id="entityType"
              class="w-full px-3 py-[17px] font-nunito font-normal border border-Ticket-input rounded-lg text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder"
              required
            >
              <option value="" disabled>Select Entity</option>
              <option value="farm">Farm</option>
              <option value="factory">Factory</option>
            </select>
          </div>
          <div class="mb-6">
            <GenericInput
              v-model="form.fromDate"
              id="fromDate"
              type="date"
              required
              placeholder="From (Select Date)"
            />
          </div>
          <div class="mb-6">
            <GenericInput
              v-model="form.toDate"
              id="toDate"
              type="date"
              required
              placeholder="To (Select Date)"
            />
          </div>
          <Button
            text="Generate Report"
            backgroundColor="bg-primary-color"
            textColor="text-bold-color"
            custom-classes="w-full py-3"
            type="submit"
          />
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, defineProps, defineEmits, onMounted, onBeforeUnmount } from "vue";
  import Button from "@/components/global/Button.vue";
  import GenericInput from "@/components/global/GenericInput.vue";
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(["close", "generate"]);
  
  const form = reactive({
    fullName: "",
    entityType: "",
    fromDate: "",
    toDate: "",
  });
  
  const closePopup = () => {
    emit("close");
  };
  
  const generateReport = () => {
    emit("generate", form);
  };
  
  const handleClickOutside = (event) => {
    const modal = event.target.closest(".bg-white"); 
    if (!modal) {
      closePopup(); 
    }
  };
  
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });
  </script>
  
  <style scoped></style>
  