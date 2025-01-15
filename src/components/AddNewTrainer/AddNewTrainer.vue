<template>
    <div
      class="w-full mt-6 bg-white px-6 py-5 border border-border-color rounded-lg shadow"
    >
      <h2
        class="font-inter font-semibold text-[30px] leading-[38px] text-title-color"
      >
        {{ formTitle }}
      </h2>
      <p
        class="font-inter font-normal text-[16px] leading-[24px] text-paragraph-color mt-5"
      >
        {{ formSubtitle }}
      </p>
  
      <form @submit.prevent="createTicket" class="mt-[22px]">
        <div class="h-[654px]">
          <div class="mb-6">
            <div
              class="font-inter font-normal text-[16px] leading-6 text-center text-paragraph-color"
            >
              {{ uploadLabel }}
            </div>
            <div
              class="flex flex-col mt-3 items-center justify-center px-6 py-4 border border-border-color rounded-lg cursor-pointer"
              @click="triggerFileInput"
            >
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleFileUpload"
              />
              <component :is="icon" />
              <p class="text-sm font-inter font-normal text-paragraph-color mt-3">
                <span
                  class="text-training-button font-semibold text-[14px] leading-[20px]"
                  >{{ uploadClickText }}</span
                >
                or drag and drop<br />
                <span class="text-xs">{{ uploadHint }}</span>
              </p>
            </div>
          </div>
  
          <div class="flex space-x-8">
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              class="w-[1063px] px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
              :placeholder="courseTitlePlaceholder"
            />
          </div>
  
          <div class="flex space-x-8 mt-6">
            <select
              id="lessons"
              v-model="form.lessons"
              class="w-[515px] px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
            >
              <option v-for="option in lessonOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
  
            <select
              id="trainer"
              v-model="form.trainer"
              class="w-[515px] px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
            >
              <option v-for="option in trainerOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>
  
          <div class="mt-6">
            <textarea
              id="description"
              v-model="form.description"
              rows="6"
              class="w-[1063px] px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
              :placeholder="descriptionPlaceholder"
            ></textarea>
          </div>
        </div>
  
        <div class="flex justify-end space-x-4 mt-[22px]">
          <Button
            type="button"
            :text="cancelButtonText"
            backgroundColor="bg-Ticket-cancel"
            textColor="text-bold-color"
            custom-classes="px-[74px] py-3"
            @click="cancel"
          />
  
          <Button
            :text="submitButtonText"
            backgroundColor="bg-primary-color"
            textColor="text-bold-color"
            custom-classes="px-[48.5px] py-3"
            type="submit"
          />
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import Button from "@/components/global/Button.vue";
  import { ref } from "vue";
  const props = defineProps({
    formTitle: {
      type: String,
      required: true
    },
    formSubtitle: {
      type: String,
      required: true
    },
    uploadLabel: {
      type: String,
      required: true
    },
    uploadClickText: {
      type: String,
      required: true
    },
    uploadHint: {
      type: String,
      required: true
    },
    courseTitlePlaceholder: {
      type: String,
      required: true
    },
    descriptionPlaceholder: {
      type: String,
      required: true
    },
    cancelButtonText: {
      type: String,
      required: true
    },
    submitButtonText: {
      type: String,
      required: true
    },
    organisationOptions: {
      type: Array,
      required: true
    },
    lessonOptions: {
      type: Array,
      required: true
    },
    trainerOptions: {
      type: Array,
      required: true
    },
    icon : {
      type: String,
      required : true
    }
  });
  
  const form = ref({
    subject: "",
    type: "",
    lessons: "",
    trainer: "",
    description: "",
    file: null,
  });
  
  const fileInput = ref(null);
  
  const createTicket = () => {
    console.log("Form Data:", form.value);
    alert("Ticket created successfully!");
  };
  
  const cancel = () => {
    form.value = { subject: "", type: "", lessons: "", trainer: "", description: "", file: null };
  };
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      form.value.file = file;
      console.log("File selected:", file);
    }
  };
  
  const triggerFileInput = () => {
    fileInput.value.click();
  };
  </script>
  
  <style>
  
  </style>
  